import React, {useContext} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Context} from './Context';

export default function List() {

  const [getState, setState] = useContext(Context);

  const   storage = async() => {
    try {
      await AsyncStorage.setItem('data', JSON.stringify({...getState}));
    } catch (error) {
      console.log('error');
    }
  }  

  setTimeout(() => {
    storage()
    console.log( AsyncStorage.getItem('data'));
}, 1000);

  const openMenu = (itemKey) => {
    setState({
      ...getState,
      isMenu: true,
      itemKey: itemKey
    });
  }

  return ( 
    getState.list.map((item) => (
    <View key={item.key}>
        <View style={styles.scrollItems}>
            <View style={styles.scrollItemsTextContainer}>
            <Text style={styles.scrollItemsText}>{item.data}</Text>
            </View>

            <TouchableOpacity
            onPress={() => openMenu(item.key)}
            style={styles.menuButton}
            >
            <Image style={styles.menuIcon} source={require('../../assets/menu.png')}/>
            </TouchableOpacity>
        </View>
    </View>))
  );
}

const styles = StyleSheet.create({
  scrollItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#BBC9DD',
    padding: 20,
    marginBottom: 5,
    borderRadius: 10
  },
  scrollItemsTextContainer: {
    width: '90%'
  },
  scrollItemsText: {
    alignSelf: 'flex-start',
    color: '#4A586E'
  },
  menuButton: {
    position: 'absolute',
    alignSelf: 'center',
    right: 10,
    width: 30,
    height: 30
  },
  menuIcon: {
    width: 30,
    height: 30
  }
})