import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 12,
    backgroundColor: '#2f363c'
  },
  text: {
    fontWeight: 'bold',
    color: '#f54254',
    fontSize: 35,
    textAlign: 'center', 
    marginRight: 220
  },
  
})

export default Header;