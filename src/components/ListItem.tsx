import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'


const ListItem = ( { films } ) => {
  console.log('PROPS', films)

  return (
    
    <View style={styles.ListContainer}>
      {films.map(( film, i ) => {
        return (
          <View style={styles.listItem} key={i}>
             <Text style={styles.Title}>
              Titulo: {film.Title} 
             </Text>
            <Text style={styles.Text}>
              Tipo: {film.Type} 
            </Text>
            <Text style={styles.Text}>
             Año :  {film.Year} 
            </Text>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: film.Poster,
              }}
            />
          </View>
        )
      })}
    </View>

  )
}

export default ListItem

const styles = StyleSheet.create({

  ListContainer : {
    flex: 1,
    flexDirection: 'column' 
  },

  listItem: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'blue'
  },
  Title : {
    fontSize: 18,
    fontWeight: '700',
    margin: 10
  },
  Text : {
    fontSize: 17,
    fontWeight: '500',
    margin: 10
  },
  tinyLogo: {
    width: 150,
    height: 150,
    margin: 10,
    alignSelf: 'center'
  },

})