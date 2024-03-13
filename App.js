import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Speech from 'expo-speech';
import * as React from 'react';

export default function App() {
  const [input, setInput] = React.useState('');

  const speak = () => {
    Speech.speak(input);
  };

  return (
    <View style={styles.container}>
      <TextInput onChangeText={(text) => setInput(text)} value={input} placeholder="Type here" style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, margin: 10, padding: 10, textAlign: 'center' }} />
      <Button title="Press to hear text" onPress={speak} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
