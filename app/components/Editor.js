import React, {useContext} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

import {Context} from './Context';

export default function Editor() {

    const [getState, setState] = useContext(Context);

    const editTask = () => {
        if (getState.editedTask) {
            getState.list.map(item => {
                if (item.key === getState.itemKey) {
                    item.data = getState.editedTask
                }
                setState({
                    ...getState,
                    isEditor: false,
                    editedTask: ''
                })
            })
        }
    }

    const cancelTask = () => {
        setState({
            ...getState,
            isEditor: false,
            editedTask: ''
        })
    }

    return (
        <View>
            <TextInput
                style={styles.textInput}
                onChangeText={task => setState({
                ...getState,
                editedTask: task
                })}
                value={getState.editedTask}
                placeholder="Enter edited task"
                placeholderTextColor='#4A586E'
                underlineColorAndroid='#4A586E'
                >

            </TextInput>

            <View style={styles.buttonsGroup}>
                <TouchableOpacity onPress={editTask} style={styles.editButton}>
                    <Text style={styles.addButtonText}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={cancelTask} style={styles.cancelButton}>
                    <Text style={styles.addButtonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  textInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFFCBB',
    padding: 20,
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 10
  },
  buttonsGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  editButton: {
    backgroundColor: '#EEDC7C',
    width: '40%',
    padding: 20,
    borderRadius: 10
  },
  cancelButton: {
    backgroundColor: '#FBCEB5',
    width: '40%',
    padding: 20,
    borderRadius: 10
  },
  addButtonText: {
    alignSelf: 'center',
    color: '#4A586E'
  }
})