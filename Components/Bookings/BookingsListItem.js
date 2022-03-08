import { Text, View, TouchableOpacity, Image } from 'react-native';
import BookingsStyles from './../../Styles/BookingsStyles.js';
import { bookingTimeFormat } from './bookingTimeFormat.js';

const BookingsListItem = ({ item, onPress }) => {
  const spot = item.parkingSpot;

  return (<TouchableOpacity onPress={onPress} style={BookingsStyles.item}>
    <View style={BookingsStyles.itemData}>
      <Image
          style={BookingsStyles.spotIMG}
          source={{uri: spot.imageLink}}
        />
      <View style={BookingsStyles.spotHeader}>
        <Text style={BookingsStyles.spotParking}>{spot.parkingName}, {spot.spotNumber}</Text>
        <Text style={BookingsStyles.spotAddress}>{spot.city}, {spot.street} {spot.streetTag}</Text>
        <Text style={BookingsStyles.spotStatus}><Text style={BookingsStyles.bold}>From:</Text> {bookingTimeFormat(item.startDate)}</Text>
        <Text style={[BookingsStyles.spotStatus, BookingsStyles.bold]}>Booked By:</Text>
        <Text>{item.ownerName}</Text>

      </View>
    </View>
  </TouchableOpacity>);
}

export default BookingsListItem;
