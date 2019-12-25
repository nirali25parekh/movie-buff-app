import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import MovieDetailsScreen from './MovieDetailsScreen'
import MovieScreen from './MovieScreen'

export default createStackNavigator({
    Movies : MovieScreen,
    MovieDetails : MovieDetailsScreen,
  })