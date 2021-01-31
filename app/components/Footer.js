import React, {useContext} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import {Context} from './Context';

export default function Footer() {

    const [getState, setState] = useContext(Context);

    // const   storage = async() => {
    //     try {
    //       await AsyncStorage.setItem('data', JSON.stringify({...getState}));
    //     } catch (error) {
    //       console.log('error');
    //     }
    //   }        

  const addTask = async () => {
    if (getState.task && getState.list) {
        await setState({
            ...getState,
            list: [...getState.list, {key: Math.random().toString(), data: getState.task}],
            task: '',
            isMenu: false,
            isEditor: false,
            isDoneList: false,
            isArchiveList: false,
            isHome: true,
        })
    }

    // if (getState.list){
        // storage()
        // console.log(await AsyncStorage.getItem('data'));
    // }
  }

  return (

    <View style={styles.footer}>
        <TextInput
            style={styles.textInput}
            onChangeText={task => {
                
                setState({
            ...getState,
            task: task,
            })}}
            value={getState.task}
            placeholder="New task"
            placeholderTextColor='#4A586E'
            underlineColorAndroid='#4A586E'
            >

        </TextInput>

        <TouchableOpacity onPress={addTask} style={styles.addButton}>
            <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        backgroundColor: '#D7E1E9'
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#4A586E',
        padding: 40,
        backgroundColor: '#D7E1E9'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 30,
        backgroundColor: '#4A586E',
        width: 90,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#D7E1E9',
        fontSize: 24
    }
})
