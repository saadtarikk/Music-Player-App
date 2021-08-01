import { StatusBar} from 'expo-status-bar';
import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, Modal, Dimensions, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const AlbumArt = ({width}) => {
    return (
        <View style={{
            width: width,
            justifyContent: 'center',
            alignItems: 'center'
         }}>
          <View style={styles.artworkWrapper}>
          <Image source={{uri: 'https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/23/81/27/238127f9-bec3-639a-6f8a-efce1192850e/20UM1IM07632.rgb.jpg/170x170bb.png'}}
          style={styles.artworkImg}
           /> 

         {/* {item ?  <Image source={{uri: item["im:name"][2].label}} /> : null } */}
      </View>
          
        </View>
    )
}

const styles = StyleSheet.create({
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
        width: 300,
        height: 350,
        borderRadius: 15,
      },
})

export default AlbumArt
