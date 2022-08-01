import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../redux/CounterRed';
import {jumpBy100, downBy100} from '../redux/JumpRed';
import {remove, replace, originArr} from '../redux/ArraySample';

export function TestScreen() {
  const {count} = useSelector(state => state.counterSlice);
  const {value} = useSelector(state => state.jump);
  const {arr} = useSelector(state => state.arrSample);
  const dispatch = useDispatch();

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>Counter: {count}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => dispatch(increment())}>
        <Text>Inc</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => dispatch(decrement())}>
        <Text>Dec</Text>
      </TouchableOpacity>

      <Text>jumppy: {value}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => dispatch(jumpBy100())}>
        <Text>add 100</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => dispatch(downBy100())}>
        <Text>minus 100</Text>
      </TouchableOpacity>

      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 18}}>[ </Text>
        {arr.map(data => {
          return <Text style={{fontSize: 18}}>{data}, </Text>;
        })}
        <Text style={{fontSize: 18}}> ]</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => dispatch(remove())}>
        <Text>delete 4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => dispatch(replace())}>
        <Text>replace 4 with 3</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => dispatch(originArr())}>
        <Text>original array</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'yellow',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
