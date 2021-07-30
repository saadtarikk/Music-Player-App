import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TopChart({item}) {

  const [musicPlayer, setMusicPlayer] = useState(false)


    

  return (

    
     
    <TouchableOpacity style={styles.listItem}>
        <StatusBar style="auto" />
        <View style={styles.songView}>
        <Modal visible={musicPlayer}>
            <View style={styles.musicPlayer}>
              <Text>Hello World</Text>
              <Ionicons
        name='close-circle' 
        size={70}
        color='#f54254'
        onPress={() => setMusicPlayer(false)}
         />
            </View>
        </Modal>
        {/* <Image style={{height:15, resizeMode:"contain",  backgroundColor:'white'}} source={{require: 'https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/23/81/27/238127f9-bec3-639a-6f8a-efce1192850e/20UM1IM07632.rgb.jpg/55x55bb.png'}} /> */}
        { item ?  <Text  style={styles.listItemText}>{item["im:name"].label}{'\n'}{item["im:artist"].label}</Text> : null}
        <Ionicons
        name='play-circle' 
        size={35}
        color='#f54254'
        onPress={() => setMusicPlayer(true)}
         />
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 40,
        backgroundColor: 'black',
        borderBottomWidth: 1,
        borderColor: '#eee',
        flexWrap: 'wrap'
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