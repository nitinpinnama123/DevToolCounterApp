import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState(''); // ✅ State for user's name

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  const handleSubmit = () => {
    console.log('Submitted Name:', name); // ✅ Log user's name
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React DevTools Example</Text>
      <Text style={styles.counter}>Counter: {counter}</Text>
      <Button title="Increase" onPress={increaseCounter} />
      <Button title="Decrease" onPress={decreaseCounter} />

      {/* ✅ Input box for name */}
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    width: '80%',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default App;

