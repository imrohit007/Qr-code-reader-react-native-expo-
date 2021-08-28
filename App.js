import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Scanner from './screens/Scanner';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';

import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();



function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Scanner" component={Scanner} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => {
  return (
    <NavigationContainer>
     
        <App />
      
    </NavigationContainer>
  )
}
