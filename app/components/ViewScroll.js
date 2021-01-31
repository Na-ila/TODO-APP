import React, {useContext} from 'react';
import { StyleSheet, ScrollView} from 'react-native';

import {Context} from './Context';
import Editor from './Editor';
import List from './List';
import Menu from './Menu';
import HeaderMenu from './HeaderMenu';
import DoneList from './DoneList';
import ArchiveList from './ArchiveList';

export default function ViewScroll() {

  const [getState, setState] = useContext(Context);
  
    // const   storage = async() => {
      
    //       try {
    //         await AsyncStorage.setItem('data', JSON.stringify({...getState}));
    //       } catch (error) {
    //         console.log('error');
    //       }
    //     }

    //     storage();

  return (
    <ScrollView style={styles.scrollContainer}>
        {getState.isMenu ? <Menu/> : 
          getState.isEditor ? <Editor/> : 
            getState.isHeaderMenu ? <HeaderMenu/> : 
              getState.isDoneList ? <DoneList/> :
                getState.isArchiveList ? <ArchiveList/> : 
                  getState.isHome ? <List/> : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    margin: 15,
    marginBottom: 100
  }
})