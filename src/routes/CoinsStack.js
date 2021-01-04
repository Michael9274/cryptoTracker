import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Auth from '../components/auth/Auth';
import Coins from '../components/coins/Coins';
import CoinsDetail from '../components/coins/CoinsDetail';
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
    <Screen name="Coins" component={Coins} />
    <Screen name="CoinsDetail" component={CoinsDetail} />
  </Navigator>
);
