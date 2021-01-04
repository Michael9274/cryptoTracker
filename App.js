/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CoinsStack from './src/routes/CoinsStack';
import FavoritesStack from './src/routes/FavoritesStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {grey, blackPearl} from './src/resources/Colors';

const {Navigator, Screen} = createBottomTabNavigator();

export default () => (
  <NavigationContainer>
    <Navigator
      tabBarOptions={{
        tintColor: grey,
        activeTintColor: 'white',
        style: {
          backgroundColor: blackPearl,
        },
      }}>
      <Screen
        name="Coins"
        component={CoinsStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="bank"
              type="font-awesome"
              color={focused ? 'white' : grey}
            />
          ),
        }}
      />
      <Screen
        name="Favorites"
        component={FavoritesStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="heart"
              type="font-awesome"
              color={focused ? 'white' : grey}
            />
          ),
        }}
      />
    </Navigator>
  </NavigationContainer>
);
