
 import React from 'react';
 import MyStack from './src/navigation/MyStack'
 import { useColorScheme } from 'react-native'
 import { NavigationContainer, DefaultTheme, DarkTheme  } from '@react-navigation/native';
 
 import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

 

 const App = () => {
      const scheme  = useColorScheme();

    return ( 
      <NavigationContainer theme={ scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <MyStack />
      </NavigationContainer>
    );
 };


 export default App;
