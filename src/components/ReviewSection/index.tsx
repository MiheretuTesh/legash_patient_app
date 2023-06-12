//import liraries
import React, {Component} from 'react';
import {View, Text} from 'react-native';

// create a component
const ReviewSection = ({review}: any) => {
  return (
    <View style={{paddingVertical: 15, paddingHorizontal: 15}}>
      <Text style={{color: '#333', fontSize: 18, fontWeight: '400'}}>
        {review.name}
      </Text>
      <Text style={{color: '#333', fontSize: 15, fontWeight: '300'}}>
        {review.message}
      </Text>
    </View>
  );
};

export default ReviewSection;
