import { StyleSheet } from 'react-native';

const FloatingButtonStyles = StyleSheet.create({
  cancel: {
    backgroundColor: '#ffd8e4'
  },
  floatingButtonTouchableOpacity: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    width: 56,
    height: 56,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  fabIcon: {
    color: '#370b1e',
  }
});


export default FloatingButtonStyles;
