import { StyleSheet } from 'react-native';

const ParkingSpotStyles = StyleSheet.create({
  spotIMG: {
    width: 80,
    height: 80,
  },
 item: {
   padding: 16,
   borderBottomColor: '#dedede',
   borderBottomWidth: 1,
   backgroundColor: '#f7f7f7',
   color: '#222222'
 },
 itemData: {
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'flex-start'
 },
 spotHeader: {
   paddingHorizontal: 8
 },
 spotParking: {
   fontWeight: 'bold',
   fontSize: 16
 },
 spotStatus: {
   marginTop: 8
 },
 spotDetails: {
   marginHorizontal: 24,
 },
 spotDetailsParking: {
   textAlign: 'center',
   margin: 16,
   fontWeight: 'bold',
   fontSize: 20
 },
 bold: {
   fontWeight: 'bold'
 },
 spotDetailsOther: {
   marginTop: 12,
   marginBottom: 12
 },
 spotDetailsMainImage: {
   width: '100%',
   height: undefined,
   aspectRatio: 3/2
 }
});

export default ParkingSpotStyles;
