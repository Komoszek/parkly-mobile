import { ActivityIndicator, Text, View, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import SpotCounterStyles from './../../Styles/SpotCounterStyles.js';
import ParkingSpotsListItem from './ParkingSpotsListItem.js';

function SpotCounter({navigation, isLoading = false, isError = false, availableSpots = 0, bookedSpots = 0}) {
  return(
    <View style={SpotCounterStyles.spotCounter}>
      {isLoading ? <ActivityIndicator size="large" color="#00aa00" /> :
      (isError ? <Text>Loading spot counter failed. Pull down to refresh.</Text> : <>
        <View style={SpotCounterStyles.spotCounterItem}>
          <Text style={SpotCounterStyles.spotCounterHeader}>Available</Text>
          <Text style={[SpotCounterStyles.spotCounterCount, SpotCounterStyles.green]}>{availableSpots}</Text>
        </View>
        <View style={SpotCounterStyles.spotCounterItem}>
          <Text style={SpotCounterStyles.spotCounterHeader}>Booked</Text>
          <Text style={[SpotCounterStyles.spotCounterCount, SpotCounterStyles.red]}>{bookedSpots}</Text>
        </View>
      </>)
        }

    </View>);
}

export default SpotCounter;
