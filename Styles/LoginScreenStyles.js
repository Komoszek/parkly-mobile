import { StyleSheet } from 'react-native';

const LoginScreenStyles = StyleSheet.create({
  formContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  },
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  inputView: {
    width: '75%',
    maxWidth: 400,
    minWidth: 150,
    marginTop: 10,

  },
  signInButton: {
    position: 'relative',
    marginTop: 20
  },
  errorInput: {
    borderColor: 'rgba(255, 0, 0, 0.2)'
  },
  error: {
    marginTop: 12,
  },
  hidden: {
    display: 'none'
  },
  label: {
    marginVertical:10,
    color: 'rgba(0,0,0,0.8)'
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    padding: 10,
  },
  loading: {
    position: 'absolute',
    display: 'flex',
    backgroundColor: 'rgba(0,0,0,0.5)',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10

  }
});

export default LoginScreenStyles;
