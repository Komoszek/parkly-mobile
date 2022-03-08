import { StyleSheet} from 'react-native';

const BookingsStyles = StyleSheet.create({
  spotIMG: {
    width: 80,
    height: 80,
  },
  bookingAddress: {
    paddingHorizontal: 8
  },
  bookingHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  bookingBlock: {
    marginTop: 12,
  },
  bookingDetails: {
    marginHorizontal: 24,
  },
 item: {
   padding: 16,
   borderBottomColor: '#dedede',
   borderBottomWidth: 1,
   backgroundColor: '#fbfbfb',
   color: '#222222'
 },
 spotInfo: {
   fontSize: 24,
   fontWeight: 'bold'
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
 bold: {
   fontWeight: 'bold'
 }
});

export default BookingsStyles;
