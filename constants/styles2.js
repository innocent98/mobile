import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, SHADOWS, SIZES} from './theme';
import ScreenSizes from './utils/ScreenSizes';

const {width, height} = ScreenSizes;
const itemWidth = Dimensions.get('window').width;
const itemHeight = Dimensions.get('window').height;

export const styles2 = StyleSheet.create({
  // service det
  productImgCon: {
    width: itemWidth,
    height: itemHeight * 0.5,
    backgroundColor: COLORS.dark.background,
    position: 'absolute',
    opacity: 0.1,
    top: 0,
  },
  serviceDetImg: {width: itemWidth, height: itemHeight * 0.5},
  productTitle: {
    color: COLORS.dark.background,
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: SIZES.xxl,
    paddingHorizontal: 10,
    paddingTop: 15
  },
  productSubTitle: {
    color: COLORS.dark.backgroundSoft,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.medium,
    paddingHorizontal: 10,
  },
  productDetView: {paddingHorizontal: 10, paddingVertical: 5},
  productDesc: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.font,
    color: COLORS.dark.backgroundSoft,
    marginBottom:15
  },
  qtyCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom:0
  },
  qtyBtnCon: {borderWidth: 1, borderColor: COLORS.light.primary, margin: 10},
  qtyBtn: {
    height: SIZES.button,
    width: SIZES.button,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyTxt: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: SIZES.extraLarge,
    color: COLORS.dark.backgroundSoft,
  },
  productUnit: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.font,
    color: COLORS.dark.backgroundSoft,
    marginTop: 10,
    textAlign: 'center',
  },
  productBtnCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 15,
    marginBottom: 25,
  },
  productAmt: {
    borderWidth: 1,
    borderColor: COLORS.light.primary,
    height: SIZES.button,
    borderRadius: 10,
    paddingHorizontal: 25,
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: SIZES.font,
    color: COLORS.dark.backgroundSoft,
  },
  productpayBtn: {
    backgroundColor: COLORS.light.primary,
    height: SIZES.button,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: itemWidth * 0.4,
  },
  productpayTxt: {
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: SIZES.medium,
    color: COLORS.light.backgroundSoft,
  },
});
