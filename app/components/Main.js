import React, {useContext, useEffect} from 'react';
import { KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Context} from './Context';
import Footer from './Footer';
import ViewScroll from './ViewScroll';
import Header from './Header';



export default function Main() {

  const [getState, setState] = useContext(Context);
  
  const load = async() => {
    try {
      let getState = await AsyncStorage.getItem('data')

      if (getState) {
          setState(JSON.parse(getState));
      }
    } catch (error) {
      console.log('error');
    }
  }

//   useEffect(() => {
//     (async () => {
//         console.log(await AsyncStorage.getItem('data'));
//     })();
//   }, []);
  
  useEffect(() => {
    load()
  }, [])
  

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
    <View style={styles.container}>
        <Header/>

        <ViewScroll/>

        <Footer/>
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})