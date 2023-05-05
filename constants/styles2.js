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
    paddingTop: 15,
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
    marginBottom: 15,
  },
  qtyCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 0,
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

  // contact us
  contactImg: {
    width: itemWidth,
    height: itemHeight * 0.4,
    backgroundColor: COLORS.light.background,
  },
  contactTitle: {
    color: COLORS.dark.background,
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: SIZES.xxl,
    paddingHorizontal: 10,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  contactCard: {
    margin: 10,
    ...SHADOWS.light,
    backgroundColor: COLORS.light.backgroundSoft,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  contactCardTitle: {
    color: COLORS.dark.background,
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: SIZES.medium,
    textAlign: 'center',
    marginBottom: 10,
  },
  contactCardText: {
    color: COLORS.dark.background,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.font,
  },
  learnMore: {
    color: COLORS.light.link,
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: SIZES.font,
    textAlign: 'center',
    paddingVertical: 10,
    marginBottom: 15,
  },

  // internet
  internetCon: {
    position: 'absolute',
    bottom: '9%',
    backgroundColor: COLORS.light.background,
    width: '100%',
  },
  internetTxt: {
    color: COLORS.light.red,
    textAlign: 'center',
    fontFamily: 'IBMPlexSans-Regular',
    padding: 8,
  },

  // sucess modal
  successContainer: {
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: itemHeight,
  },
  successImg: {
    height: itemHeight * 0.35,
    width: itemWidth,
    marginTop: -30,
  },
  successTxt: {
    color: COLORS.dark.backgroundSoft,
    textAlign: 'center',
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.medium,
    marginTop: 20,
  },
  errorTxt: {
    color: COLORS.light.red,
    textAlign: 'center',
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.medium,
    marginTop: 20,
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 30,
    fontFamily: 'IBMPlexSans-Medium',
    color: COLORS.light.primary,
    fontSize: SIZES.medium,
    textDecorationLine: 'underline',
  },
});
