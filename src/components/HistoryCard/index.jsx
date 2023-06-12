import React, {Component} from 'react';
import {View, Text, ScrollView, Image, TextInput} from 'react-native';
import MyHistoryCard from '../../components/MyHistoryCard';
import {styles} from './index.style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

import MenuIcon from 'react-native-vector-icons/Feather';
// import SvgUri from 'react-native-svg-uri';
// import {readFileSync} from 'fs';

// create a component
const HistoryCard = ({navigation}) => {
  // const pathToSvg = require('../../assets/menu.svg');
  // const svgData = readFileSync(pathToSvg, 'utf8');
  // const svgUri = `data:image/svg+xml;base64,${Buffer.from(svgData).toString(
  //   'base64',
  // )}`;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <View style={{paddingVertical: 20}}>
            <MenuIcon name="menu" size={20} color="black" />
          </View>
        </TouchableOpacity>

        <ScrollView>
          <View>
            {Patients.map((patient, index) => (
              <TouchableOpacity key={index} style={{marginVertical: 10}}>
                <MyHistoryCard patient={patient} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HistoryCard;
