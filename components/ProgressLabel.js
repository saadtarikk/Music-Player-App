import { StatusBar} from 'expo-status-bar';
import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, Modal, Dimensions, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';


const ProgressLabel = () => {
    return (
        <View style={styles.ProgressLabelContainer}>
            <Text style={styles.ProgressLabelTxt}>0.00</Text>
            <Text style={styles.ProgressLabelTxt}>3.40</Text>
        </View>
    )
};

const styles = StyleSheet.create({
      ProgressLabelContainer: {
        width: 340,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginBottom: 10
      },
      ProgressLabelTxt: {
        color: '#fff',
        marginBottom: 10,
      },

})

export default ProgressLabel
