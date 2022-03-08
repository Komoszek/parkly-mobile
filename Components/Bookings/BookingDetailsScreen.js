import { Alert, Text, View, TouchableOpacity, Image } from 'react-native';
import { useContext } from 'react';
import FloatingCancelButton from './../FloatingCancelButton.js';
import BookingsStyles from './../../Styles/BookingsStyles.js';
import BookingsListItem from './BookingsListItem.js';
import { cancelBooking } from './../../API/api.js';
import { bookingCancelDialog } from './BookingCancelDialog.js';
import { bookingTimeFormat } from './bookingTimeFormat.js';
import SecurityContext from './../../SecurityContext.js';

function BookingDetailsScreen({route, navigation}) {
  const item = route.params;
  const spot = item.parkingSpot;
  const security = useContext(SecurityContext);

  const cancelBookingError = (err) => {
    if(err?.response?.status === 401){
      security.signOut();
      return;
    }

    alert(err);
  }

  const onCancellationConfirm = () => {
    cancelBooking({token: security.jwt,
                  parkingSpotId: spot.id,
                  onSuccess: () => navigation.navigate('Bookings', {refresh: true}),
                  onError: cancelBookingError
                  });
  }

  return(
    <>
    <View style={BookingsStyles.bookingDetails}>
      <View style={[BookingsStyles.bookingBlock, BookingsStyles.bookingHeader]}>
        <Image
            style={BookingsStyles.spotIMG}
            source={{uri: spot.imageLink}}
          />
        <View style={BookingsStyles.bookingAddress}>
          <Text style={BookingsStyles.spotInfo}>{spot.parkingName}, {spot.spotNumber}</Text>
          <Text>{spot.city}, {spot.street} {spot.streetTag}</Text>
        </View>

      </View>
      <View style={BookingsStyles.bookingBlock}>
        <Text style={BookingsStyles.bold}>Booked by:</Text>
        <Text>{item.ownerName}</Text>
      </View>
      <View style={BookingsStyles.bookingBlock}>
        <Text><Text style={BookingsStyles.bold}>From:</Text> {bookingTimeFormat(item.startDate)}</Text>
      </View>
      <View style={BookingsStyles.bookingBlock}>
        <Text><Text style={BookingsStyles.bold}>Price per hour:</Text> {spot.pricePerHour}zł</Text>
      </View>
    </View>
    <FloatingCancelButton onPress={() => bookingCancelDialog({onConfirm: onCancellationConfirm})} />
    </>);
}

export default BookingDetailsScreen;
