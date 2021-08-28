import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';



export default function Home() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Button title='Scan' onPress={() => navigation.navigate("Scanner")}/>
    </View>
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
