import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';

export default function GoalInput(props) {
  const [enterGoal, setEnterGoal] = useState('');
  const goalInputHandle = text => {
    setEnterGoal(text);
  };
  const onAddGoal = () => {
    if (enterGoal !== '') {
      props.addGoalHandle(enterGoal);
      setEnterGoal('');
    } else {
      alert('Please Enter your Text');
    }
  };
  const onCancle = () => {
    props.BackCancle();
    setEnterGoal('');
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.containertextinput}>
        <TextInput
          placeholder="Nhập text"
          style={styles.textinput}
          onChangeText={goalInputHandle}
          value={enterGoal}
        />
        <TouchableOpacity style={styles.button} onPress={onAddGoal}>
          <Text style={styles.textbutton}>ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.button, backgroundColor: 'red'}}
          onPress={onCancle}>
          <Text
            style={{
              ...styles.textbutton,
              color: 'white',
            }}>
            CANCLE
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  containertextinput: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    width: '25%',
  },
  textbutton: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  textinput: {
    borderColor: '#9999',
    borderWidth: 1.5,
    borderRadius: 10,
    width: '80%',
  },
});
