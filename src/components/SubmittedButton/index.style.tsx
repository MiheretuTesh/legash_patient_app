import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.redColor,
    width: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btn: {
    color: COLORS.whiteColor,
    padding: 8,
    fontSize: 16,
    fontWeight: '500',
  },
});
