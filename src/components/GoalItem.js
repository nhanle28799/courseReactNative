import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function GoalItem(props) {
  const onDelete = goal => {
    props.deleteGoalHandle(goal);
  };
  return (
    <TouchableOpacity onPress={() => onDelete(props.goal)}>
      <View style={styles.containergoal}>
        <Text style={styles.textgoal}>{props.goal.goal}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containergoal: {
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    borderWidth: 0.4,
    borderRadius: 10,
    borderColor: '#8888',
    elevation: 2,
    justifyContent: 'center',
    marginBottom: 10,
  },
  textgoal: {fontWeight: 'bold', alignSelf: 'center', fontSize: 20},
});
