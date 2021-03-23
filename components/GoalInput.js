import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Modal,Button } from 'react-native'

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const inputHandler = (enterdText) => {
        setEnteredGoal(enterdText);
    }

    const addGoalHandler = () => {
        props.onGoalAdded(enteredGoal);
        setEnteredGoal('');
    }

    const closeModal = () =>{
        const close=false
        props.onCloseModal(close);
        setEnteredGoal('')
    }
    return (
        <View>
            <Modal visible={props.visible} animationType="slide">
                <View style={styles.firstView} >
                    <TextInput placeholder="Course Goal... "
                        style={styles.inputContainer}
                        onChangeText={inputHandler}
                        value={enteredGoal}
                    />
                    <View style={styles.secondView}>
                    <Button title="Cancel" color="red" onPress={closeModal}/>
                    <Button title="Add" onPress={addGoalHandler} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    firstView: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainer: {
        width: 250,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    secondView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})
export default GoalInput;