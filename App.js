import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

export default function App() {
const [enteredGoal, setEnteredGoal] = useState('');
const[courseGoals, setCourseGoals] = useState('');

const goalInputHandler=(enteredText)=>{
  setEnteredGoal(enteredText);
}


const addGoalHandler=()=>{
  setCourseGoals(currentGoals => [...currentGoals,enteredGoal]);
}
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
      <TextInput placeholder='Course Goal' style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
      <Button title='ADD'  onPress={addGoalHandler}/>
      </View>
      {enteredGoal ? <Text style={styles.card}>{enteredGoal}</Text> : null}
      
      <View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    // justifyContent:"space-evenly",
    alignItems:'center'
  },
  input: {
    width:'50%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin:10
  },
  card: {
    width:'50%',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor:'#5261ac',
    height:50,
    padding: 10,
    margin:10
  }
});







