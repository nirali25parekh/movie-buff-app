import { StyleSheet, Dimensions } from 'react-native'

export const screenStyles = StyleSheet.create({
  screen: {
    backgroundColor: 'black',
    flexDirection: 'row',
    flex: 1,
  },
  flatList: {
    marginTop: 10,
  }

})


export const posterStyles = StyleSheet.create({
  poster: {
    margin: 2,
    flex: 1,
    borderColor: 'green',
    borderRadius: 6,
    flexDirection: 'column',
    minHeight: 200,
    flexWrap: 'wrap',
  },

  image: {
    margin: 5,
    height: 180,
    width: 120,
    //backgroundColor: 'red',
  },

  title: {
    width: 120,
    fontSize: 14,
    backgroundColor: 'rgba(99,99,99,0.6)',
    flexWrap: 'wrap',
    color: 'white',
    fontWeight: 'bold',
    marginRight: 4,
  },
});

export const detailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageParent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
  },
  poster: {
    
resizeMode:'contain',
    width: 185 * 1.4,
    height: 278 * 1.4 ,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    margin: 10,
  },
  genresBubble: {
    fontSize: 18,
    color: 'white',
    alignItems: 'center',
    width:200,
    height: 50,
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#004d40',
    borderRadius: 17,
  },
  genresText: {
    color: 'white',
    fontSize: 18,
    padding:8,
  },
  ratingText: {
    color: 'white',
    fontSize: 16,
  },
  ratingBubble: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#004d40',
    borderRadius: 35,
  },
  ratingAndGenres: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin:18,
  },
  overviewText: {
    color: 'white',
    paddingHorizontal: 24,
    fontSize: 15,
  },
  imdbButton:{
    alignSelf:'center',
    margin:30,
    //backgroundColor:'#f3ce13',
    backgroundColor:'#dba506',
    height:50,
    width:200,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 17,
  },
  imdbButtonText:{
    color:'black',
    fontSize: 18,
    textAlignVertical:'center',
    paddingLeft:20,
  }
})