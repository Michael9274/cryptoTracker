import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Favorites from '../components/favorites/Favorites';
import {blackPearl, white} from '../resources/Colors';

const {Navigator, Screen} = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: blackPearl,
    shadowOpacity: 0,
  },
  headerTintColor: white,
};

export default () => (
  <Navigator screenOptions={screenOptions}>
    <Screen name="Favorites" component={Favorites} />
  </Navigator>
);
