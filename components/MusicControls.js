import { StatusBar} from 'expo-status-bar';
import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, Modal, Dimensions, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const MusicControls = ({playSong}) => {
    return (
      <View style={styles.musicControls}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name='play-skip-back-outline' size={35} color='#f54254' style={{marginTop: 25}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => playSong()}>
            <Ionicons name='ios-pause-circle' size={75} color='#f54254' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name='play-skip-forward-outline' size={35} color='#f54254' style={{marginTop: 25}} />
          </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    musicControls: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between',
        marginBottom: 15,
        
         
      }

})

export default MusicControls
