import { StyleSheet } from 'react-native';

const SpotCounterStyles = StyleSheet.create({
 spotCounter: {
   paddingVertical: 12,
   backgroundColor: '#fefefe',
   borderBottomColor: '#dadada',
   borderBottomWidth: 1,
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-evenly'
 },
 spotCounterItem: {
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column'
 },
 spotCounterHeader: {
   fontWeight: 'bold',
   fontSize: 20,
 },
 spotCounterCount: {
   fontSize: 32
 },
 red: {
   color: 'red'
 },
 green: {
   color: 'green'
 }
});

export default SpotCounterStyles;
