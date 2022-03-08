import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ParkingSpotsListScreen from './Spots/ParkingSpotsListScreen.js';
import BookingsListScreen from './Bookings/BookingsListScreen.js';

const Tab = createBottomTabNavigator();


const screenOptions = {
  tabBarStyle: {
    paddingBottom: 10,
    height: 62,
    paddingTop: 2,
    backgroundColor: '#e9f4e9',
  },
  headerStyle: {
    backgroundColor: '#e9f4e9',
  },
  tabBarActiveTintColor: 'rgba(0, 20, 0, 0.8)',
  tabBarInactiveTintColor: 'rgba(0, 20, 0, 0.4)',
}


export default function Tabs() {
  return(
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Parking Spots" component={ParkingSpotsListScreen}
      options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-marker" color={color} size={size} />
          ),
        }}/>

      <Tab.Screen name="Bookings" component={BookingsListScreen}
      options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
    );
}
