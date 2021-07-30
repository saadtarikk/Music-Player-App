import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import LandingPage from './components/LandingPage'
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style={styles.StatusBar}/>
      <Header title="Music"/>
      <LandingPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: 'black',
  paddingTop: 50,
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  StatusBar:{
    backgroundColor: '#f54254',
    color: 'black'
  }
});
