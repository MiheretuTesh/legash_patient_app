//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const HistoryPage = () => {
  return (
    <View style={styles.container}>
      <Text>HistoryPage</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    width: '100%',
    height: '100%',
  },
});

//make this component available to the app
export default HistoryPage;
