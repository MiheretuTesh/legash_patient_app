import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {},
  popContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  heroTxt: {
    color: COLORS.txtColor,
    fontSize: 22,
    fontWeight: 700,
    paddingBottom: 20,
  },
  paymentContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  txtContainer: {
    backgroundColor: COLORS.whiteColor,
    elevation: 10,
    padding: 10,
    borderRadius: 16,
    paddingHorizontal: 20,
  },
  txtContainerActive: {
    backgroundColor: COLORS.mainColor,
    elevation: 10,
    padding: 10,
    borderRadius: 16,
    paddingHorizontal: 20,
  },
  txt: {
    color: COLORS.txtColor,
    fontSize: 15,
    fontWeight: 700,
  },
  txtActive: {
    color: COLORS.whiteColor,
    fontSize: 15,
    fontWeight: 700,
  },
  formContainer: { width: '70%', marginTop: 50 },
  labelTxt: {
    color: COLORS.txtColor,
    fontSize: 15,
    paddingBottom: 10,
    fontWeight: 500,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputFieldContainer: {
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.mainColor,
    width: '100%',
    paddingVertical: 5,
  },
  input: {
    color: COLORS.txtColor,
    paddingVertical: 5,
  },
});
