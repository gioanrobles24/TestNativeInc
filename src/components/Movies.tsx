import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  ScrollView,
  Alert,
  ActivityIndicator
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import getMoviesApi from './../services/MoviesByYearAndWord'
import ListItem from './ListItem'

const Movies: React.FC<{}> = () => {

  const isDarkMode = useColorScheme() === 'dark';

  const [ films, setFilms ] = useState(null)
  const [ loading, setLoading ] = useState(true) 
   
  useEffect(() => {
      getMoviesApi({s: 'love', y: 2020 })
      .then( (res) => res.json())
      .then((data) =>  { 
        if(data.Response === "True"){
        
          const { Search } = data
          setFilms(Search)
          setLoading(false)
        } else {
        
          Alert.alert(
            "Oh no!",
            "Error al obtener listado intente nuevamente",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Aceptar", onPress: () => getMovies() }
            ]
          );
        }
      })
    }, [])

    console.log('films', films)

  return (
    <ScrollView style={styles.sectionContainer}>
      { loading == true ? 
          <ActivityIndicator size="large" color="#00ff00"  />    
        :
        <View>
          <Text
            style={[
              styles.sectionTitle,
              {
                color: isDarkMode ? Colors.white : Colors.black,
              },
            ]}>
            Peliculas 2020
          </Text>
          <ListItem
           films={films} 
          />
        </View>
      }
    </ScrollView>
  );
};
 export default Movies

const styles = StyleSheet.create({
  sectionContainer: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
});