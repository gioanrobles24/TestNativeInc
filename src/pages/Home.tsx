import React from 'react'
import {
  Text, 
  StyleSheet, 
  SafeAreaView, 
} from 'react-native'

import { useTheme } from '@react-navigation/native';
import Movies from '../components/Movies'

const Home  = () => {

  const { colors } = useTheme();

   return (
     <SafeAreaView style={styles.container}>
        <Text style={{ color: colors.text, fontSize:24, fontWeight:'600', alignSelf:'center' }} >
           Home
         </Text>
        <Movies />

     </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex:1
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Home 
