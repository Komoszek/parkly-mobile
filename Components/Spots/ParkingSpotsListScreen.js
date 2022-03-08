import { RefreshControl, Text, View, FlatList } from 'react-native';
import React, { useState, useEffect, useContext, useRef } from 'react';
import ParkingSpotStyles from './../../Styles/ParkingSpotsStyles.js';
import ParkingSpotsListItem from './ParkingSpotsListItem.js';
import SpotCounter from './SpotCounter.js';
import EmptyListItem from './../EmptyListItem.js';
import {getParkingSpots, getSpotsCounter} from './../../API/api.js';
import SecurityContext from './../../SecurityContext.js';

function ParkingSpotsListScreen({navigation}) {
  const [spots, setSpots] = useState([]);
  const [isLoadingList, setIsLoadingList] = useState(true);
  const [isLoadingCounter, setIsLoadingCounter] = useState(true);
  const [isErrorCounter, setIsErrorCounter] = useState(false);
  const [isErrorList, setIsErrorList] = useState(false);
  const [endReached, setEndReached] = useState(false);
  const [currentPage, setCurrentPage] = useState(-1);
  const [spotCounterData, setSpotCounterData] = useState({available: 0, booked: 0});
  const pageSize = 10;
  const flatListRef = React.useRef();

  const security = useContext(SecurityContext);

  const mergeResults = (results) => {
    setSpots(oldSpots => [...oldSpots, ...results]);
  }

  const getParkingSpotsSuccess = (result) => {
    setSpots(result);
    setCurrentPage(curr => curr + 1);
    setIsErrorList(false);
    setIsLoadingList(false);
  }

  const spotLoadError = (err) => {
    if(err?.response?.status === 401){
      security.signOut();
      return;
    }

    setIsLoadingList(false);
    alert(err);
    setIsErrorList(true);
  }

  const resetSpots = () => {
    setIsLoadingList(true);
    setIsLoadingCounter(true);
    setIsErrorCounter(false);
    setIsErrorList(null);
    setCurrentPage(-1);
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
    getParkingSpots({token: security.jwt,
                     currentPage: 0,
                     pageSize: pageSize,
                     onSuccess: getParkingSpotsSuccess,
                     onError: spotLoadError});
    updateCounter();
  }

  const updateCounterSuccess = (data) => {
    setSpotCounterData({available: data.freeCount, booked: data.bookedCount});
    setIsLoadingCounter(false);
  }

  const updateCounterError = (err) => {
    if(err?.response?.status === 401){
      security.signOut();
      return;
    }

    setIsErrorCounter(true);
    setIsLoadingCounter(false);
  }

  const updateCounter = () => {
    getSpotsCounter({token: security.jwt,
                    onSuccess: updateCounterSuccess,
                    onError: updateCounterError})
  }

  const loadMoreSpotsSuccess = (results) => {
      if(results.length > 0){
        mergeResults(results);
        setCurrentPage(curr => (curr + 1));
      }

      setIsLoadingList(false);
  }

  const loadMoreSpots = () => {
    setIsLoadingList(true);

    getParkingSpots({token: security.jwt,
                     currentPage: currentPage + 1,
                     pageSize: pageSize,
                     onSuccess: loadMoreSpotsSuccess,
                     onError: spotLoadError});
  }

  useEffect(() => {
    resetSpots();
  }, []);


   useEffect(() => {
     const unsubscribe = navigation.addListener('tabPress', (event) => {
       if(navigation.isFocused()){
         resetSpots();
       }
     });

     return unsubscribe;
   }, [navigation]);


  const renderItem = ({ item }) => {
   const onPress = (item) => {
     navigation.navigate('ParkingSpotDetailsScreen', item);
   }
   return (
     <ParkingSpotsListItem
       item={item}
       onPress={() => onPress(item)}
     />
   );
  };

  return(<>
          <SpotCounter availableSpots={spotCounterData.available} bookedSpots={spotCounterData.booked}
                      isLoading={isLoadingCounter} isError={isErrorCounter}/>
          <FlatList data={spots} renderItem={renderItem} keyExtractor={item => item.id}
                    onEndReached={loadMoreSpots} ref={flatListRef}
                    ListEmptyComponent={<EmptyListItem isError={isErrorList}/>}
                    refreshControl={<RefreshControl refreshing={isLoadingList} onRefresh={resetSpots}/>} />
        </>);
}

export default ParkingSpotsListScreen;
