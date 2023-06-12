import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const LoadingComponent = ({size, loadingColor}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={loadingColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingComponent;
