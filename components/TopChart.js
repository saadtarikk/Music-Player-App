import { StatusBar} from 'expo-status-bar';
import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,
   SafeAreaView, Image, Modal, Dimensions,
    FlatList, Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FooterControl from './FooterControl';
import MusicControls from './MusicControls';
import ProgressLabel from './ProgressLabel';
import SongSlider from './SongSlider';

export default function TopChart({item, top20}) {

  const [musicPlayer, setMusicPlayer] = useState(false);
  const {width, height} = Dimensions.get('window')
  const songSlider = useRef(null)

  // const skipForward = () => {
  //   item["im:name"].label + 1
  // }

  const renderSongs = ({item}) => {
    return(
     <View style={{
       width: width,
       justifyContent: 'center',
       alignItems: 'center'
     }}>
      <View style={styles.artworkWrapper}>
          <Image source={{uri: 'https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/23/81/27/238127f9-bec3-639a-6f8a-efce1192850e/20UM1IM07632.rgb.jpg/170x170bb.png'}}
          style={styles.artworkImg}
           /> 
         {/* <Image source={require(item["im:image"][2].label)} 
          style={styles.artworkImg}
          />  */}
      </View>
     </View>
    )
  }
  // console.log(renderSongs)


  return (
    <TouchableOpacity style={styles.listItem}>
        {/* <StatusBar style="auto"/> */}
        <View style={styles.songView}>
          <Modal visible={musicPlayer} animationType="slide">
            <SafeAreaView style={styles.musicContainer}>
              <View style={styles.musicPlayer}>
                    
                    <FlatList
                    ref={songSlider}
                      data={top20}
                      renderItem={renderSongs}
                      keyExtractor={(item, index) => String(index)}
                      horizontal
                      pagingEnabled
                      showsHorizontalScrollIndicator={false}
                      scrollEventThrottle={16}
                     />

                    <View>
                      <Text style={styles.title}>{item["im:name"].label}</Text>
                      <Text style={styles.artist}>{item["im:artist"].label}</Text>
                    </View>

                   <SongSlider />
                    <ProgressLabel />
                    <MusicControls />
              </View>
              <FooterControl setMusicPlayer={setMusicPlayer}/> 
            </SafeAreaView>
          </Modal>
            {/* <Image style={{height:40, width:40,  backgroundColor:'black'}} source={item["im:image"][2].label}/> */}
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
    alignItems: 'center',
    justifyContent: 'center', 
    flex: 1
  },
  musicContainer: {
    flex: 1,
    backgroundColor: '#2f363c'
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
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#EEEEEE'
  },
  artist: {
    fontSize: 16,
    fontWeight: '200',
    textAlign: 'center',
    color: '#EEEEEE'
  },
  
  
  
});