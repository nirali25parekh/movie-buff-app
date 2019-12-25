import React from 'react';
//import { Text, View, FlatList, ScrollView } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator,} from 'react-navigation-tabs'
import MovieScreen from './src/MovieScreen'
import TVScreen from './src/TVScreen'
import { Icon } from 'react-native-elements'

const TabNavigator = createBottomTabNavigator({
  Movies : {
    screen: MovieScreen,
    navigationOptions:{  
      tabBarLabel:'Movies',  
      tabBarIcon:({tintColor})=>(  
          <Icon name="man" color={tintColor} size={25}/>  
      )  
    } 
  } ,
  TV : {
    screen: TVScreen,
    navigationOptions:{  
      tabBarLabel:'TV',  
      tabBarIcon:({tintColor})=>(  
          <Icon name="tv" color={tintColor} size={25}/>  
      )  
    } 
  }
},
{
  tabBarOptions: {
  activeTintColor: '#a41034', //which selected
},
  barStyle: { backgroundColor: '#694fad' },
}
);

const stackNavigator = createStackNavigator({ TabNavigator }, { headerMode: "none" });

export default createAppContainer(stackNavigator);