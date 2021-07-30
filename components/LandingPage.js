import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LandingPage() {
    
    const[top20, setTop20] = useState(null);


    const getTop20 = () => {
        fetch('https:itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setTop20(data.feed.entry))
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getTop20()
    },[])






  return (
     
    <TouchableOpacity style={styles.listItem}>
        <StatusBar style="auto" />
        <View style={styles.listItemView}>
        { top20 ?  <Text style={styles.listItemText}>{top20[0].title.label}</Text> : null}
        {/* {top20 ? <Text></Text>} */}
        <Ionicons
        name='play-circle' 
        size={35}
        color='#f54254' />
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 20,
        backgroundColor: 'black',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },  
  listItemView: {
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listItemText: {
      color: 'white',
      fontSize: 15
  }
});