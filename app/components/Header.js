import React, {useContext} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import {Context} from './Context';

export default function Header() {

    const [getState, setState] = useContext(Context);

    const headerMenu = () => {
        setState({
            ...getState,
            isMenu: false,
            isEditor: false,
            isHeaderMenu: true,

        })
    }

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>MY TODO LIST</Text>

            <TouchableOpacity
            onPress={headerMenu}
            style={styles.headerMenuButton}
            >
            <Image style={styles.headerMenuIcon} source={require('../../assets/headerMenu.png')}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        flexDirection: 'row',
        backgroundColor: '#D7E1E9',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly'
    },
    headerText: {
        width: '70%',
        paddingBottom: 20,
        paddingLeft: 20,
        fontSize: 20,
        color: '#4A586E'
    },
    headerMenuIcon: {
        marginBottom: 12,
        width: 40,
        height: 40
    }
})