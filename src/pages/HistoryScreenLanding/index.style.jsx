import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: COLORS.screenColor,
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
});
