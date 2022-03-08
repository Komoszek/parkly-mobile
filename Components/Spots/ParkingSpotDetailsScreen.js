import { StyleSheet, Text, View, Image } from 'react-native';
import ParkingSpotStyles from './../../Styles/ParkingSpotsStyles.js';

const statusToText = (status) => status ? 'Booked' : 'Available';

function ParkingSpotDetailsScreen({route, navigation}) {
  const item = route.params;
  return(
    <View style={ParkingSpotStyles.spotDetails}>
      <Text style={ParkingSpotStyles.spotDetailsParking}>
        {item.parkingName}, {item.spotNumber}
      </Text>
      <Text>
        {item.city}, {item.street} {item.streetTag}
      </Text>
      <View style={ParkingSpotStyles.spotDetailsOther}>
        <Text>
          <Text style={ParkingSpotStyles.bold}>Price per hour:</Text> {item.pricePerHour}zł
        </Text>
        <Text>
          <Text style={ParkingSpotStyles.bold}>Status:</Text> {statusToText(item.isBooked)}
        </Text>
      </View>
      <View style={ParkingSpotStyles.spotDetailsImages}>
        <Image style={ParkingSpotStyles.spotDetailsMainImage} source={{uri: item.imageLink}}/>
      </View>
    </View>);
}

export default ParkingSpotDetailsScreen;
