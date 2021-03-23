import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {

  const [goalList, setGoalList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);


  const addGoalHandler = (enteredGoal) => {
    console.log(enteredGoal);
    setGoalList(currentGoal => [...currentGoal, { id: Math.random(1, 1000).toString(), value: enteredGoal }]);
    //console.log("this is my goal list",goalList);  
    setIsModalVisible(false);
  }

  const DeleteGoal = (id) => {
    console.log("delete works", id);

    setGoalList(currentGoal => {
      return currentGoal.filter((goal) => goal.id !== id)
    })
  }

  const showModal = () =>{
    setIsModalVisible(true);
}
const closeModal = (close) =>{
  setIsModalVisible(close)
}

  return (
    <View style={styles.screen}>
      <Button title="ADD GOAL" onPress={showModal} />
      <GoalInput onCloseModal={closeModal} visible={isModalVisible} onGoalAdded={addGoalHandler} style={styles.screen}/>

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goalList} renderItem={itemData => (
          <GoalItem onDelete={DeleteGoal} goal={itemData} />
        )} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
})


export default App;
