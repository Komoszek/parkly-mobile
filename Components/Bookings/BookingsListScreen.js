import { RefreshControl, FlatList } from 'react-native';
import React, { useState, useEffect, useContext, useRef } from 'react';
import BookingsStyles from './../../Styles/BookingsStyles.js';
import BookingsListItem from './BookingsListItem.js';
import EmptyListItem from './../EmptyListItem.js';
import SecurityContext from './../../SecurityContext.js';

import {getBookings} from './../../API/api.js';

function BookingsListScreen({route, navigation}) {
 const [bookings, setBookings] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [isError, setIsError] = useState(false);
 const [currentPage, setCurrentPage] = useState(-1);
 const security = useContext(SecurityContext);
 const flatListRef = React.useRef();

 const pageSize = 10;

 const shouldRefresh = route?.params?.refresh;

 const mergeResults = (results) => {
   setBookings(old => [...old, ...results]);
 }

 const getBookingsSuccess = (result) => {
   setBookings(result);
   setCurrentPage(curr => curr + 1);
   setIsError(false);
   setIsLoading(false);
 }

 const getBookingsError = (err) => {
   if(err?.response?.status === 401){
     security.signOut();
     return;
   }

   setIsError(true);
   alert(err);
   setIsLoading(false);
 }

 const resetList = () => {
   setIsLoading(true);
   setIsError(null);
   setCurrentPage(-1);
   flatListRef.current.scrollToOffset({ animated: true, offset: 0 });

   getBookings({token: security.jwt,
                    currentPage: 0,
                    pageSize: pageSize,
                    onSuccess: getBookingsSuccess,
                    onError: getBookingsError});
 }

  useEffect(() => {
    if(shouldRefresh){
      resetList();
      navigation.setParams({refresh: false});
    }
  }, [shouldRefresh])

 const loadMoreBookingsSuccess = (results) => {
     if(results.length > 0){
       mergeResults(results);
       setCurrentPage(curr => (curr + 1));
     }

     setIsLoading(false);
 }

 const loadMoreBookings = () => {
   setIsLoading(true);
   getBookings({token: security.jwt,
                    currentPage: currentPage + 1,
                    pageSize: pageSize,
                    onSuccess: loadMoreBookingsSuccess,
                    onError: getBookingsError});
 }

 useEffect(() => {
   resetList();
 }, []);

 useEffect(() => {
   const unsubscribe = navigation.addListener('tabPress', (event) => {
     if(navigation.isFocused()){
       resetList();
     }
   });

   return unsubscribe;
 }, [navigation]);


 const renderItem = ({ item }) => {
   const onPress = (item) => {
     navigation.navigate('BookingDetailsScreen', item);
   }
   return (
     <BookingsListItem
       item={item}
       onPress={() => onPress(item)}
     />
   );
 };

  return(<FlatList data={bookings} renderItem={renderItem} keyExtractor={item => item.id}
     ref={flatListRef}
     onEndReached={loadMoreBookings}
     ListEmptyComponent={<EmptyListItem isError={isError}/>}
     refreshControl={<RefreshControl refreshing={isLoading} onRefresh={resetList}/>} />);
}

export default BookingsListScreen;
