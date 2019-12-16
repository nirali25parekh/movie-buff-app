import React from 'react'
import {View, FlatList, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-ionicons'
import TVPoster from './TVPoster'

export default class TVScreen extends React.Component {

  static navigationOptions = {
    headerTitle: 'TV', 
    //tabBarIcon: <Ionicons name="tv" size={15} color={'red'} />
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
      this.getTrendingTVFromApi();
  }

  getTrendingTVFromApi = async()=> {
    try {
      let response = await fetch(
        'https://api.themoviedb.org/3/trending/tv/day?api_key=05bf8fa390e3359f75c683c86e71844d',
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
      <View style={styles.tvScreen}>
        <FlatList
          scrollEnabled = {true}
          numColumns={3}
          //horizontal={true}
          data={this.state.dataSource}
          renderItem={({item}) => <TVPoster  data = {item} />}
          keyExtractor={({id}, index) => id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tvScreen:{
    backgroundColor: 'black',
    flexDirection:'row',
    flex:1,
  },
})