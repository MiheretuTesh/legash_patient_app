import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.whiteColor,
    height: '100%',
  },
  upperContainer: {
    height: 230,
    width: '100%',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: COLORS.mainColor,
    marginBottom: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperHeroTxt: {
    fontWeight: '700',
    fontSize: 26,
  },
});
