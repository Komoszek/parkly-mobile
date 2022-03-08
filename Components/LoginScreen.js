import { useState, useContext } from 'react';
import { ActivityIndicator, View, Text, TextInput, Button} from 'react-native';
import LoginScreenStyles from './../Styles/LoginScreenStyles.js';
import { userSignIn} from './../API/api.js';
import SecurityContext from './../SecurityContext.js';
import ParklyLogotype from './../assets/ParklyLogotype.jsx'
function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const security = useContext(SecurityContext);

  const errorHandler = (err) => {
    setIsLoading(false);
    if(err.response === undefined){
      setErrorText('Network Error')
    } else if(err.response.status === 401){
      setErrorText('Incorrect credentials');
    } else {
      setErrorText('Network Error');
    }
    setIsError(true);
  }

  const signIn = () => {
    setIsError(false);
    setIsLoading(true);

    userSignIn({username: username,
                password: password,
                onSuccess: security.signIn,
                onError: errorHandler,
                });
  }

  return(
    <View style={LoginScreenStyles.container}>

      <View style={LoginScreenStyles.formContainer}>
          <ParklyLogotype />
          <View style={LoginScreenStyles.inputView}>
            <Text style={LoginScreenStyles.label}>Username</Text>
            <TextInput style={[LoginScreenStyles.input, (isError ? LoginScreenStyles.errorInput : {})]} onChangeText={setUsername} value={username} placeholder=""/>
          </View>
          <View style={LoginScreenStyles.inputView}>
            <Text style={LoginScreenStyles.label}>Password</Text>
            <TextInput style={[LoginScreenStyles.input, (isError ? LoginScreenStyles.errorInput : {})]}
                       onChangeText={setPassword}
                       value={password}
                       secureTextEntry={true}
                       placeholder=""/>
          </View>
          <View style={[LoginScreenStyles.error, (isError ? {} : LoginScreenStyles.hidden)]}>
            <Text style={{color: 'red'}}>{errorText}</Text>
          </View>
          <View style={[LoginScreenStyles.inputView, LoginScreenStyles.signInButton]}>
            <Button title="Sign In" onPress={signIn} />
          </View>
      </View>
      {isLoading && <View style={LoginScreenStyles.loading}>
        <ActivityIndicator size="large" color="#00aa00" />
      </View>}
    </View>);
}

export default LoginScreen;
