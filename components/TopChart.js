import { StatusBar} from 'expo-status-bar';
import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, Modal, Dimensions, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

export default function TopChart({item, top20}) {

  const [musicPlayer, setMusicPlayer] = useState(false);
  const {width, height} = Dimensions.get('window')

  const renderSongs = () => {
    return(
     <View style={{
       width: width,
       justifyContent: 'center',
       alignItems: 'center'
     }}>
      <View style={styles.artworkWrapper}>
         {/* <Image source={{uri: 'https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/23/81/27/238127f9-bec3-639a-6f8a-efce1192850e/20UM1IM07632.rgb.jpg/170x170bb.png'}}
          style={styles.artworkImg}
           /> */}
           <Image source={item["im:image"][2].label} 
          style={styles.artworkImg}
          />
      </View>

     </View>
    )
  }


  return (

    
     
    <TouchableOpacity style={styles.listItem}>
        {/* <StatusBar style="auto"/> */}
        <View style={styles.songView}>
          <Modal visible={musicPlayer} animationType="slide">
            <SafeAreaView style={styles.musicContainer}>
              <View style={styles.musicPlayer}>
                    
                    <FlatList
                      data={top20}
                      renderItem={renderSongs}
                      keyExtractor={(item) => item.id}
                      horizontal
                      pagingEnabled
                      showsHorizontalScrollIndicator={false}
                      scrollEventThrottle={16}
                     />

                    <View>
                      <Text style={styles.title}>{item["im:name"].label}</Text>
                      <Text style={styles.artist}>{item["im:artist"].label}</Text>
                    </View>

                    <View>
                      <Slider
                        style={styles.progressContainer}
                        value={10}
                        minimumValue={0}
                        maximumValue={100}
                        thumbTintColor='#f54254'
                        minimumTrackTintColor='#f54254'
                        maximumTrackTintColor='#FFF'
                        onSlidingComplete={() => {}}
                      />
                    </View>

                    <View style={styles.ProgressLabelContainer}>
                      <Text style={styles.ProgressLabelTxt}>0.00</Text>
                      <Text style={styles.ProgressLabelTxt}>3.40</Text>
                    </View>

                    <View style={styles.musicControls}>
                      <TouchableOpacity onPress={() => {}}>
                        <Ionicons name='play-skip-back-outline' size={35} color='#f54254' style={{marginTop: 25}} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => {}}>
                        <Ionicons name='ios-pause-circle' size={75} color='#f54254' />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => {}}>
                        <Ionicons name='play-skip-forward-outline' size={35} color='#f54254' style={{marginTop: 25}} />
                      </TouchableOpacity>
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
  progressContainer: {
    width: 350,
    height: 40,
    marginTop: 25,
    flexDirection: 'row'
  },
  ProgressLabelContainer: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ProgressLabelTxt: {
    color: '#fff'
  },
  musicControls: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    marginTop: 15
     
  }
});