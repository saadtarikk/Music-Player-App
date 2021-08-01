import { StatusBar} from 'expo-status-bar';
import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, Modal, Dimensions, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';




const FooterControl = ({setMusicPlayer}) => {
    return (
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
          <TouchableOpacity onPress={() => setMusicPlayer(false)}>
            <Ionicons name='ellipsis-horizontal' size={25} color="#777777"/>
          </TouchableOpacity> 
        </View>
      </View>
    )
}

const styles = StyleSheet.create({

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
})

export default FooterControl
