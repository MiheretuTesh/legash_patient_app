//import liraries
import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {styles} from './index.style';
import {TouchableOpacity} from 'react-native-gesture-handler';

// create a component
const SubmittedButton = ({btnTitle, isLoading, isError}: any) => {
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity> */}
      {isLoading && isError !== true ? (
        <ActivityIndicator color="#fff" style={styles.btn} />
      ) : (
        <Text style={styles.btn}>{btnTitle}</Text>
      )}
      {/* </TouchableOpacity> */}
    </View>
  );
};

// define your styles

//make this component available to the app
export default SubmittedButton;
