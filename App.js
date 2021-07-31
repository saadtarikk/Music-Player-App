import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useRef} from 'react';
import { FlatList, StyleSheet, Text, View, SearchBar} from 'react-native';
import Header from './components/Header';
import LandingPage from './components/LandingPage'
import TopChart from './components/TopChart'
import { Ionicons } from '@expo/vector-icons';
import {v4 as uuid} from 'uuid';
import { set } from 'lodash';
export default function App() {

  const [top20, setTop20] = useState(null);
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
    .then(res => res.json())
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
      <StatusBar style='light' /></View>
      <Header title="Music"/>
      <View>
      
      </View>
      <FlatList data={top20} 
       renderItem={({item, index}) => <TopChart top20={top20} item={item}/>}
       keyExtractor={(item) => item.index}
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
});
