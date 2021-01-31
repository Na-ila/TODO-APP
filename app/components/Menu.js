import React, {useContext} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import {Context} from './Context';

export default function Main() {

    const [getState, setState] = useContext(Context);

    const closeMenu = () => {
        setState({
            ...getState,
            isMenu: false
        });
    }

    const editTask = () => {
        setState({
            ...getState,
            isEditor: true,
            isMenu: false
                });
    }

    const doneTask = () => {
        setState({
            ...getState,
            isMenu: false,
            doneList: [...getState.doneList, getState.list.filter(item => item.key === getState.itemKey)],
            list: getState.list.filter(item => item.key != getState.itemKey)
        });
    }

    const deleteTask = () => {
        setState({
            ...getState,
            list: getState.list.filter(item => item.key != getState.itemKey),
            isMenu: false,
            itemKey: ''
        });
    }

    const archiveTask = () => {
        setState({
            ...getState,
            isMenu: false,
            archiveList: [...getState.archiveList, getState.list.filter(item => item.key === getState.itemKey)],
            list: getState.list.filter(item => item.key != getState.itemKey)
        });
    }

    return (
        <View>
            <TouchableOpacity onPress={closeMenu} style={styles.closeButton}>
                <Image style={styles.closeIcon} source={require('../../assets/close.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={editTask} style={styles.editButton}>
                <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={doneTask} style={styles.doneButton}>
                <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={deleteTask} style={styles.deleteButton}>
                <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={archiveTask} style={styles.archiveButton}>
                <Text style={styles.buttonText}>Archive</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    closeButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 5
    },
    editButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#B7D4FF',
        padding: 20,
        marginBottom: 5,
        borderRadius: 10
    },
    doneButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#CEFF9D',
        padding: 20,
        marginBottom: 5,
        borderRadius: 10
    },
    deleteButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#FE9E76',
        padding: 20,
        marginBottom: 5,
        borderRadius: 10
    },
    archiveButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#EEDC7C',
        padding: 20,
        marginBottom: 5,
        borderRadius: 10
    },
    buttonText: {
        alignSelf: 'flex-start',
        color: '#4A586E'
    }
})