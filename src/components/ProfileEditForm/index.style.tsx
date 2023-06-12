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
    paddingVertical: 50,
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
  inputContainer: {
    marginBottom: 20,
  },
  labelTxt: {
    color: COLORS.txtColor,
    fontSize: 14,
    paddingBottom: 5,
    fontWeight: 500,
  },
  inputContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputFieldContainer: {
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.mainColor,
    width: '80%',
  },
  input: {
    color: COLORS.txtColor,
    paddingTop: 5,
    paddingBottom: 5,
  },
  popoverContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
  },
  popoverText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
