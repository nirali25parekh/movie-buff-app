import React from 'react'
import { View, Text, ImageBackground, ScrollView, Button, Linking, TouchableOpacity } from 'react-native';
import { detailsStyles } from '../styles'
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome'

export default class DetailsScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('paramTitle', 'Details Screen'),
            headerStyle: {
                backgroundColor: '#004d40',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
            movieObject: null,
            releaseDate: null,
            isReleaseDateLoaded: false,
            isMovieDetailsLoaded: false,
        }
    }

    componentDidMount() {
        this.getMovieDetailsFromApi();
        this.getReleaseDatesFromApi();
    }

    getMovieDetailsFromApi = async () => {
        try {
            let response = await fetch(
                `https://api.themoviedb.org/3/${this.props.navigation.getParam('paramMediaType', 'movie')}/${this.props.navigation.getParam('paramId', 'no id')}?api_key=05bf8fa390e3359f75c683c86e71844d&language=en-US`
            );

            let responseJson = await response.json();
            //console.warn(responseJson)
            this.setState({
                movieObject: responseJson,
                isMovieDetailsLoaded: true,
            }) //responseJson is an object
        } catch (error) {
            console.error(error);
        }
    }

    getReleaseDatesFromApi = async () => {
        try {
            let response = await fetch(
                `https://api.themoviedb.org/3/${this.props.navigation.getParam('paramMediaType', 'movie')}/${this.props.navigation.getParam('paramId', 'default')}/release_dates?api_key=05bf8fa390e3359f75c683c86e71844d`
            );
            let responseJson = await response.json();
            if (this.props.navigation.getParam('paramMediaType') === 'movie') {
                let releaseDate = responseJson.results[0].release_dates[0].release_date
                this.setState({
                    isReleaseDateLoaded: true,
                    releaseDate: releaseDate,
                }) // releaseDate is a date
               } else {
                   this.setState({
                       isReleaseDateLoaded : true,
                   })
               }
        } catch (error) {
            console.error(error);
        }
    }

    goToIMDBLink = (IMDBid) => {
        const imdbUrl = `https://www.themoviedb.org/redirect?external_source=imdb_id&external_id=${IMDBid}`
        Linking.canOpenURL(imdbUrl).then(supported => {
            if (supported) {
                Linking.openURL(imdbUrl);
            } else {
                console.log("Don't know how to open URL");
            }
        })
    }

    render() {
        if (!(this.state.isMovieDetailsLoaded && this.state.isReleaseDateLoaded))
            return (<View />)
        else {

            const movie = this.state.movieObject
            if(this.state.releaseDate)
            {
            const releaseDate = this.state.releaseDate
            const releaseYear = releaseDate.slice(0, 4)
            }
            const imageUrl = `http://image.tmdb.org/t/p/w185/${movie.poster_path}`

            return (
                <ScrollView style={detailsStyles.container}>

                    <View style={detailsStyles.container}>
                        <View style={detailsStyles.imageParent}>
                            <ImageBackground
                                source={{ uri: imageUrl }}
                                style={detailsStyles.poster}>
                            </ImageBackground>
                        </View>

                        <View style={detailsStyles.ratingAndGenres}>

                            <TouchableOpacity
                                style={detailsStyles.genresBubble}
                                activeOpacity={1}  >
                                <Text style={detailsStyles.genresText}>
                                    {JSON.stringify(movie.genres[0].name).replace(/\"/g, "")}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={detailsStyles.ratingBubble}
                                activeOpacity={1}                       >
                                <Text style={detailsStyles.ratingText}>
                                    {JSON.stringify(movie.vote_average).replace(/\"/g, "")}/10
                                </Text>
                            </TouchableOpacity>

                        </View>


                        <Text style={detailsStyles.overviewText}> {JSON.stringify(movie.overview).replace(/\"/g, "")}</Text>


                        <TouchableOpacity
                            style={detailsStyles.imdbButton}
                            onPress={() => this.goToIMDBLink(movie.imdb_id)} >
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwsomeIcon name='imdb' color='black' size={38} ></FontAwsomeIcon>
                                <Text style={detailsStyles.imdbButtonText}>
                                    MovieDB link
                                </Text>
                            </View>
                        </TouchableOpacity>


                    </View>
                </ScrollView >

            )
        }
    }
}