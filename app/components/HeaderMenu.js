import React, {useContext} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import {Context} from './Context';

export default function HeaderMenu() {

  const [getState, setState] = useContext(Context);

  const openDoneList = () => {
    setState({
        ...getState,
        isHeaderMenu: false,
        isDoneList: true
    })
  }

  const openArchive = () => {
    setState({
        ...getState,
        isHeaderMenu: false,
        isDoneList: false,
        isArchiveList: true
    })
  }

  const openHomeList = () => {
    setState({
        ...getState,
        isHeaderMenu: false,
        isArchiveList: false,
        isMenu: false,
        isDoneList: false,
        isHome: true,
    });
  }

  return (
    <View>
        <TouchableOpacity onPress={openHomeList} style={styles.homeList}>
            <Text style={styles.doneListText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={openDoneList} style={styles.doneList}>
            <Text style={styles.doneListText}>Done list</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={openArchive} style={styles.archive}>
            <Text style={styles.archiveText}>Archive</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    homeList: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#D7E1E9',
        padding: 20,
        marginBottom: 5,
        borderRadius: 10
    },
    doneList: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#77BD8B',
        padding: 20,
        marginBottom: 5,
        borderRadius: 10
    },
    archive: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#B7D4FF',
        padding: 20,
        marginBottom: 5,
        borderRadius: 10
    }
})