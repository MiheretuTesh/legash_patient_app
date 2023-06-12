import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../constants/colors';

const {height, width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  upperContainer: {
    height: height / 3 - 120,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomContainer: {
    paddingVertical: 20,
    width: '100%',
    height: (height * 2) / 3 + 50,
    backgroundColor: COLORS.whiteColor,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    flexDirection: 'row',
    padding: 50,
    // justifyContent: 'center',
    // alignContent: 'center',
  },
});
