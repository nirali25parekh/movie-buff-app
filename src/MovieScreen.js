import React from 'react'
import {View, FlatList, Text, StyleSheet} from 'react-native';
import MoviePoster from './MoviePoster'


export default class MovieScreen extends React.Component {

      static navigationOptions = {
      headerTitle: 'Movies', 
    }

    constructor(props)
    {
        super(props);
        this.state = {
            isLoading : true,
            dataSource : null,
        }
    }
  
    componentDidMount()
    {
        
        this.getMoviesFromApi();
    }

    getMoviesFromApi = async()=> {
      try {
        
        let response = await fetch(
          'https://api.themoviedb.org/3/trending/movie/week?api_key=05bf8fa390e3359f75c683c86e71844d'
        );
        let responseJson = await response.json();
        this.setState ({
          isLoading : false,
          dataSource : responseJson.results,
        }) //responseJson.results is an array
      } catch (error) {
        console.error(error);
      }
    }
  
    render() {
      return (
        <View style={styles.movieScreen}>
           <FlatList
             style={styles.flatlist}
             scrollEnabled = {true}
             numColumns={3}
             //horizontal={true}
             data={this.state.dataSource}
             renderItem={({item}) => <MoviePoster  data = {item} />}
             keyExtractor={({id}, index) => id.toString()}
           />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    movieScreen:{
      backgroundColor: 'black',
      flexDirection:'row',
      flex:1,
    },
  })