import React, {useState} from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import GoalInput from './src/components/GoalInput';
import GoalItem from './src/components/GoalItem';

export default function App() {
  const [listGoal, setListGoal] = useState([
    {id: 1, goal: 'React Native'},
    {id: 2, goal: 'React Native'},
  ]);
  const [isAdd, setIsAdd] = useState(false);

  const addGoalHandle = enterGoal => {
    setListGoal([...listGoal, {id: Math.random(), goal: enterGoal}]);
    setIsAdd(false);
  };
  const deleteGoalHandle = goal => {
    const res = listGoal.filter(item => goal.id !== item.id);
    setListGoal(res);
  };
  const backHandle = () => {
    setIsAdd(false);
  };
  return (
    <View style={styles.container}>
      <Button title="ADD COURSE" onPress={() => setIsAdd(true)} />
      <GoalInput
        visible={isAdd}
        BackCancle={backHandle}
        addGoalHandle={addGoalHandle}
      />
      <FlatList
        style={{marginTop: 20}}
        data={listGoal}
        renderItem={itemData => (
          <GoalItem goal={itemData.item} deleteGoalHandle={deleteGoalHandle} />
        )}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({container: {padding: 10}});
