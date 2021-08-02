import { StatusBar} from 'expo-status-bar';
import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, Modal, Dimensions, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';



const SongSlider = () => {
    return (

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
        
    )
}

const styles = StyleSheet.create({
    progressContainer: {
        width: 350,
        height: 40,
        marginBottom: 25,
        flexDirection: 'row'
      },
})

export default SongSlider
