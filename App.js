import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './app/components/Header';
import StartScreen from './app/screens/StartScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="Guess Number" />
      <StartScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
