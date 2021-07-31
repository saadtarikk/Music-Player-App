import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, Modal, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TopChart({item}) {

  const [musicPlayer, setMusicPlayer] = useState(false);
  const {width, height} = Dimensions.get('window')


    

  return (

    
     
    <TouchableOpacity style={styles.listItem}>
        {/* <StatusBar style="auto"/> */}
        <View style={styles.songView}>
          <Modal visible={musicPlayer} animationType="slide">
            <SafeAreaView style={styles.musicContainer}>
              <View style={styles.musicPlayer}>
                    <View style={styles.artworkWrapper}>
                      <Image source={{uri: 'https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/23/81/27/238127f9-bec3-639a-6f8a-efce1192850e/20UM1IM07632.rgb.jpg/170x170bb.png'}}
                        style={styles.artworkImg}
                      />
                    </View>
                    <View>
                      <Text>{item["im:name"].label}</Text>
                      <Text>{item["im:artist"].label}</Text>
                    </View>
              </View>
              <View style={styles.footer}  >
                <View style={styles.footerControls}>
                  <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="heart-outline" size={25} color="#777777"/>
                  </TouchableOpacity> 
                  <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="repeat" size={25} color="#777777"/>
                  </TouchableOpacity> 
                  <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="share-outline" size={25} color="#777777"/>
                  </TouchableOpacity> 
                  <TouchableOpacity onPress={() => {}}>
                    <Ionicons name='ellipsis-horizontal' size={25} color="#777777"/>
                  </TouchableOpacity> 
                </View>
              </View>
            </SafeAreaView>
          </Modal>
            {/* <Image style={{height:40, width:40,  backgroundColor:'white'}} source={{uri: {item["im:image"].label}}}/> */}
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
        backgroundColor: '#2f363c',
        borderBottomWidth: 1,
        borderColor: '#eee',
        flexWrap: 'wrap'
    },  
  songView: {
    flexDirection: 'row',
    backgroundColor: '#2f363c',
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
  },
  musicPlayer: {
    backgroundColor: '#2f363c',
    // alignItems: 'center',
    // justifyContent: 'center', 
    flex: 1
  },
  musicContainer: {
    flex: 1,
    backgroundColor: '#2f363c'
  },
  footer: {
    borderTopColor: '#777777',
    borderTopWidth: 1,
    alignItems: 'center',
    paddingVertical: 15,
  },
  footerControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    // margin: 50
  },
  artworkWrapper: {
    width: 300,
    height: 340,
    marginBottom: 25,
    shadowColor: '#f54254',
    shadowOffset: {
      width: 5,
      height: 5.
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84
  },
  artworkImg: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  }
});