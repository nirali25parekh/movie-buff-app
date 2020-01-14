import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native';
//import Ionicons from 'react-native-ionicons'
import TVPoster from './TVPoster'
import { screenStyles } from '../styles'

export default class TVScreen extends React.Component {

  static navigationOptions = {
    title: 'TV',
    headerStyle: {
      backgroundColor: '#004d40',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };


  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  componentDidMount() {
    this.getTrendingTVFromApi();
  }

  getTrendingTVFromApi = async () => {
    try {
      let response = await fetch(
        'https://api.themoviedb.org/3/trending/tv/day?api_key=05bf8fa390e3359f75c683c86e71844d',
      );
      let responseJson = await response.json();
      this.setState({
        isLoading: false,
        dataSource: responseJson.results,
      }) //responseJson.results is an array
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <View style={screenStyles.screen}>
        <FlatList
          style={screenStyles.flatList}
          scrollEnabled={true}
          numColumns={3}
          data={this.state.dataSource}
          renderItem={({ item }) => <TVPoster
            data={item}
            _onPosterPressed={(data) => this._onPosterPressed(data)} />}
          keyExtractor={({ id }, index) => id.toString()}
        />
      </View>
    );
  }
  _onPosterPressed = (data) => {
    this.props.navigation.navigate('Details' , {paramTitle: data.name, paramId : data.id, paramMediaType  : data.media_type});
  }
}
