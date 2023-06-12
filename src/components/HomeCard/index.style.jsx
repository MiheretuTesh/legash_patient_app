import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../constants/colors';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: width - 50,
    height: 240,
    alignItems: 'center',
    backgroundColor: COLORS.whiteColor,
    borderRadius: 20,
    padding: 10,
  },
  historyCardImg: {
    width: '100%',
    height: 120,
    borderRadius: 15,
  },
  historyCardContent: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 10,
  },
  historyCardHeroTxt: {
    color: COLORS.txtColor,
    fontSize: 18,
    paddingVertical: 5,
    fontWeight: 600,
  },
  progressContainer: {
    width: '100%',
    height: 20,
    color: COLORS.tabBar,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressView: {
    width: '80%',
    height: 20,
    color: COLORS.mainColor,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
    alignItems: 'center',
  },
  cardFooterTitle: {
    color: COLORS.txtColor,
    fontSize: 15,
    fontWeight: 500,
  },
  cardFooterAmountActive: {
    color: COLORS.redColor,
    fontSize: 15,
    fontWeight: 400,
  },
  cardFooterAmountInActive: {
    color: COLORS.greyColor,
    fontSize: 15,
    fontWeight: 400,
  },
  separator: {
    width: 1,
    backgroundColor: COLORS.separatorColor,
    height: 25,
  },
});
