import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useRef} from 'react';
import { Image, FlatList, StyleSheet, Text, View, SearchBar, Button, TouchableOpacity} from 'react-native';
import Header from './components/Header';
import LandingPage from './components/LandingPage'
import TopChart from './components/TopChart'
import { Ionicons } from '@expo/vector-icons';
import {v4 as uuid} from 'uuid';
import { set } from 'lodash';
import { Audio } from 'expo-av';
export default function App({width}) {

  const [top20, setTop20] = useState([]);
  const getTop20 = function() {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setTop20(data.feed.entry))
        .catch(err => {
            console.log(err)
        })
  }

  useEffect(() => {
        setTop20(getTop20);
  },[])

  const [dance20, setDance20] = useState(null);

  const getDance20 = function() {
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json')
    .then(response => response.json())
    .then(data => res.json(data.feed.entry))
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    setDance20(getDance20);
  })

  

  
    


  return (
    <View style={styles.container}>
      <View>
      <StatusBar style='light' backgroundColor='#f54254' /></View>
      <Header title="Music"/>
      <FlatList data={top20} 
       renderItem={({item, index}) => <TopChart top20={top20} item={item} index={index}/>}
       keyExtractor={(item, index) => String(index)}
        />
        
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#2f363c',
  paddingTop: 50,
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  StatusBar:{
    backgroundColor: '#f54254',
    color: 'white'
  }
  ,playlistWrapper: {
    width: 300,
    height: 340,
    marginBottom: 25,
    shadowColor: '#f54254',
    shadowOffset: {
      width: 5,
      height: 5.
    },
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 50,
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    justifyContent: 'space-between'
  },
  playlistImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    backgroundColor: 'white'
  
  },
  playlistTxt: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#EEEEEE',
    marginTop: 10
  }
});
