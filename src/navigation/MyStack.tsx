import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './../pages/Home'


const Stack = createStackNavigator();

 const  MyStack = () => {
  return (
    <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }} 
      >
      <Stack.Screen   name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
export default MyStack