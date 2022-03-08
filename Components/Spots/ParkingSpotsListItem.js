import { Text, View, TouchableOpacity, Image } from 'react-native';
import ParkingSpotStyles from './../../Styles/ParkingSpotsStyles.js';

const statusToText = (status) => status ? 'Booked' : 'Available';

const ParkingSpotsListItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={ParkingSpotStyles.item}>
    <View style={ParkingSpotStyles.itemData}>
      <Image
          style={ParkingSpotStyles.spotIMG}
          source={{uri: item.imageLink}}
        />
      <View style={ParkingSpotStyles.spotHeader}>
        <Text style={ParkingSpotStyles.spotParking}>{item.parkingName}, {item.spotNumber}</Text>
        <Text>{item.city}, {item.street} {item.streetTag}</Text>
        <Text style={ParkingSpotStyles.spotStatus}><Text style={ParkingSpotStyles.bold}>Status:</Text> {statusToText(item.isBooked)}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default ParkingSpotsListItem;
