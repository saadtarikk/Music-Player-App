import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LandingPage({item}) {

    

  return (
    <View style={styles.container}>
    <StatusBar style={styles.StatusBar}/>
    <Header title="Music"/>
    <FlatList data={top20}  renderItem={({item, index}) => <TopChart key={index} item={item}/>} />
  </View>
    
  );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 28,
        backgroundColor: 'black',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },  
  songView: {
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listItemText: {
      color: 'white',
      fontSize: 15
  },
  playBtn: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'baseline',
      backgroundColor: 'black',
      position: 'relative'
  }
});

// <View style={{
//   width: width,
//   justifyContent: 'center',
//   alignItems: 'center'
// }}>
//  <TouchableOpacity style={styles.playlistWrapper} onPress={() => {renderTop20()}} >
//  <Image style={styles.playlistImage} source={require('./assets/playlist.jpeg')} />
//  <Text style={styles.playlistTxt} > Top20 </Text>
//  </TouchableOpacity>
//  <TouchableOpacity style={styles.playlistWrapper}>
//  <Image style={styles.playlistImage} source={require('./assets/playlist1.jpeg')}  />
//  <Text style={styles.playlistTxt}> Dance20 </Text>
//  </TouchableOpacity>

// const renderTop20 = () => {
//   return (
//     <FlatList 
//       data={top20}
//       renderItem={({item}) => <TopChart item={item}  />} 
//       keyExtractor={(index) => String(index)}
//       />
//   )
// }
// console.log(renderTop20())