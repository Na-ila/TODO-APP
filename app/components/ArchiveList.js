import React, {useContext} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Context} from './Context';

export default function ArchiveList() {

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

  const deleteTask = (key) => {
    setState({
        ...getState,
        archiveList: getState.archiveList.filter(item => item[0].key != key),
        itemKey: ''
    });
  }

  return (
    getState.archiveList.map((item, id) => 
        <View key={item.key}>
            <View style={styles.scrollItems}>
                <View style={styles.scrollItemsTextContainer}>
                    <Text style={styles.scrollItemsText}>{item[0].data}</Text>
                </View>

                <TouchableOpacity onPress={() => deleteTask(item[0].key)} style={styles.deleteButton}>
                    <Image style={styles.deleteIcon} source={require('../../assets/trash.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
  );
}

const styles = StyleSheet.create({
  scrollItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EEDC7C',
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
  deleteButton: {
    position: 'absolute',
    alignSelf: 'center',
    right: 10,
    width: 30,
    height: 30
  },
  deleteIcon: {
    width: 30,
    height: 30
  }
})