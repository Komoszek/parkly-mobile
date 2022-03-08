import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import Tabs from './Components/Tabs.js'
import BookingDetailsScreen from './Components/Bookings/BookingDetailsScreen.js';
import ParkingSpotDetailsScreen from './Components/Spots/ParkingSpotDetailsScreen.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Components/LoginScreen.js';
import SecurityContext from './SecurityContext.js';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isSigned, setIsSigned] = useState(false);
  const [jwt, setJwt] = useState('');

  const signIn = (token) => {
    setJwt(token);
    setIsSigned(true);
  }

  const signOut = () => {
    setJwt();
    setIsSigned(false);
  }

  return (
    <SecurityContext.Provider value={{isSigned: isSigned, signIn: signIn,
                                      jwt: jwt, signOut: signOut}}>
      {isSigned ? <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeTabs" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="BookingDetailsScreen" component={BookingDetailsScreen} options={{ title: 'Booking Details' }} />
          <Stack.Screen name="ParkingSpotDetailsScreen" component={ParkingSpotDetailsScreen} options={{ title: 'Spot Details' }} />
        </Stack.Navigator>
      </NavigationContainer> :
      <LoginScreen />}
    </SecurityContext.Provider>

  );
}
