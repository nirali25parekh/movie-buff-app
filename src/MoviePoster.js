import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity  } from 'react-native';
import MovieDetailsScreen from './DetailsScreen'
import { posterStyles } from '../styles'
export default class MoviePoster extends Component {
    
  render = () => {
      const imageUrl = `http://image.tmdb.org/t/p/w185/${this.props.data.poster_path}`
    return (
      <TouchableOpacity onPress={() => (this.props._onPosterPressed(this.props.data))}>
        <View style={posterStyles.poster}>
          <ImageBackground source={{uri: imageUrl}} 
                  style={posterStyles.image}>{}
                  <Text style={posterStyles.title}> {this.props.data.title} </Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
    );
  }

}