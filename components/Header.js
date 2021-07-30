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
    backgroundColor: '#f54254'
  },
  text: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center'
  },
  
})

export default Header;