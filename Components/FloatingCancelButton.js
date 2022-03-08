import { StyleSheet, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FloatingButtonStyles from './../Styles/FloatingButtonStyles.js'

export default function FloatingCancelButton({onPress}) {
  return (
  <TouchableOpacity onPress={onPress} style={[FloatingButtonStyles.cancel, FloatingButtonStyles.floatingButtonTouchableOpacity]}>
    <MaterialCommunityIcons name={'close'} style={FloatingButtonStyles.fabIcon} size={24} />
  </TouchableOpacity>);
}
