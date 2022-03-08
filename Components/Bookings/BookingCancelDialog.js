import { Alert } from 'react-native';

export const bookingCancelDialog = ({onConfirm = () => {}}) =>
   Alert.alert(
     "Confirm booking cancellation?",
     "Do you want to cancel this booking?",
     [
       {
         text: "Abort", onPress: () => {},
         style: "cancel"
       },
       { text: "Confirm", onPress: onConfirm }
     ]
   );
