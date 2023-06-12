import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../constants/colors';

const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.screenColor,
    paddingHorizontal: 30,
    height: height,
  },
});
