import React from 'react';
import { Button, Text, View } from 'react-native';
//import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
//import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome'

import MovieScreen from './src/MovieScreen'
import TVScreen from './src/TVScreen'
import DetailsScreen from './src/DetailsScreen'

const MovieStack = createStackNavigator({
  MovieHome: { screen: MovieScreen },
  Details: { screen: DetailsScreen },
});

const TVStack = createStackNavigator({
  Settings: { screen: TVScreen },
  Details: { screen: DetailsScreen },
});

export default createAppContainer(createMaterialBottomTabNavigator(
  {
    Movies: {
      screen: MovieStack,
      navigationOptions: {
        tabBarLabel: 'Movie',
        tabBarColor: 'white',
        tabBarIcon: ({ tintColor }) => (<FontAwsomeIcon name="film" color={tintColor} size={25}></FontAwsomeIcon>),
      },
    },
    TV: {
      screen: TVStack,
      navigationOptions: {
        tabBarLabel: 'TV',
        tabBarColor: 'white',
        tabBarIcon: ({ tintColor }) => (<FontAwsomeIcon name="clock-o" color={tintColor} size={25}> </FontAwsomeIcon>),
      },
    },
  },
  {
    initialRouteName: 'Movies',
    activeColor: '#f0edf6',
    inactiveColor: 'grey',
    barStyle: { backgroundColor: '#004d40' },
    order: ['Movies', 'TV',],

  }, {
  showLabel: 'true',
  labelStyle: { alignItem: 'center' }
}

));
