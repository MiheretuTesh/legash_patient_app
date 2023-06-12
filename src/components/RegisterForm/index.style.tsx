import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  txtHeroLogin: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
  },
  heroTtx: {
    color: COLORS.txtColor,
    fontSize: 26,
    fontWeight: '700',
  },
  bottomContainer: {
    paddingHorizontal: 50,
  },
  labelTxt: {
    color: COLORS.txtColor,
    fontSize: 14,
    paddingBottom: 5,
    fontWeight: '500',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputFieldContainer: {
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.mainColor,
  },
  input: {
    color: COLORS.txtColor,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
