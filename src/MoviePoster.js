import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity  } from 'react-native';

export default class MoviePoster extends Component {
    
  _onPosterPressed() {
    this.props.navigation.push('MovieDetails', {
      ...this.props.data,
    })
  }

  render = () => {
      const imageUrl = `http://image.tmdb.org/t/p/w185/${this.props.data.poster_path}`
    return (
      <TouchableOpacity onPress={this._onPosterPressed()}>
        <View style={styles.poster}>
          <ImageBackground source={{uri: imageUrl}} 
                  style={styles.image}>
                  <Text style={styles.title}> {this.props.data.title} </Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  poster: {
      margin:2,
      flex:1,
      borderColor:'green',
      borderRadius: 6,
      flexDirection:'column',
      minHeight: 200, 
      //backgroundColor: 'green',
      flexWrap:'wrap',
  },
  
  image:{
      margin: 5,
      height:180,
      width:120,
      backgroundColor:'red',
  },

  title: {
      width: 120,
      fontSize: 14,
      backgroundColor: 'rgba(99,99,99,0.5)',
      flexWrap:'wrap', 
      color: 'white',
      fontWeight:'bold',
      marginRight: 4,
      //top: 145,

      
    },
});
