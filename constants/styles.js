import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, SHADOWS, SIZES} from './theme';
import ScreenSizes from './utils/ScreenSizes';

const {width, height} = ScreenSizes;
const itemWidth = Dimensions.get('window').width;
const itemHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: COLORS.light.background},
  safeAreaDark: {flex: 1, backgroundColor: COLORS.dark.background},
  container: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingBottom: 30,
  },
  logo: {width: itemWidth * 0.4, height: itemHeight * 0.05},
  menuBtn: {
    width: SIZES.button,
    height: SIZES.button,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {width: itemWidth * 0.073, height: itemHeight * 0.05},
  scrollView: {width: '100%', paddingHorizontal: 20},
  iconImg: {width: 30, height: 30},
  tabImg: {height: 20, width: 20},
  iconsBtn: {
    height: SIZES.button,
    width: SIZES.button,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // onboard
  welcomeContainer: {
    width: width,
    height: height,
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    paddingBottom: 5,
  },
  welcomeImgCon: {
    width: itemWidth,
    height: itemHeight * 0.58,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  welcomeImg: {width: '100%', height: '100%'},
  welcomeText: {
    color: COLORS.dark.backgroundSoft,
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: SIZES.font,
    textAlign: 'center',
    width: '95%',
  },
  ditesCon: {width: itemWidth * 0.6, position: 'relative', overflow: 'hidden'},
  ditesConActual: {
    backgroundColor: COLORS.light.secondary,
    padding: 6,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  ditesConOverlay: {
    backgroundColor: COLORS.light.primary,
    position: 'absolute',
    padding: 6,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row-reverse',
    left: -200,
    top: 0,
    zIndex: 1,
  },
  dites: {
    color: COLORS.light.white,
    textTransform: 'capitalize',
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: SIZES.medium,
    textAlign: 'center',
  },
  welcomeIconBtn: {
    height: SIZES.button,
    width: SIZES.button,
    borderRadius: 50,
    backgroundColor: COLORS.light.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  welcomeIcon: {},

  //   top
  topContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
    paddingBottom: 20,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  buyButton: {
    backgroundColor: COLORS.light.red,
    borderRadius: SIZES.font,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 12,
    height: SIZES.button,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topRightSpan: {flexDirection: 'row', alignItems: 'center'},
  buyText: {
    color: COLORS.light.background,
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: SIZES.font,
  },
  buyTextSpan: {
    color: COLORS.light.background,
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: SIZES.small,
    textAlign: 'center',
  },
  topRight: {flexDirection: 'row', alignItems: 'center'},
  tabBarView: {marginTop: 10},
  broadcast: {
    backgroundColor: COLORS.light.gray,
    height: 40,
    position: 'absolute',
    top: 55,
    width: '100%',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
  },

  //   alaune
  tabScreen: {
    marginTop: 30,
    width: '100%',
    backgroundColor: COLORS.light.background,
    paddingBottom: 60,
  },
  featured: {
    width: '100%',
    height: 400,
    backgroundColor: COLORS.dark.backgroundSoft,
  },
  featuredImg: {
    width: '100%',
    height: 280,
  },
  featuredText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    padding: SIZES.extraLarge,
  },
  bigText: {
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: SIZES.large,
    color: COLORS.light.background,
  },
  featuredIcon: {marginLeft: 15, marginTop: 5},
  newsList: {
    flexDirection: 'row',
    padding: SIZES.base,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  newsListImg: {
    width: Dimensions.get('window').width * 0.31,
    height: Dimensions.get('window').height * 0.1,
    borderRadius: SIZES.font,
  },
  newsListDet: {
    flexDirection: 'column',
    width: Dimensions.get('window').width * 0.62,
  },
  newsList2: {
    flexDirection: 'row',
    padding: SIZES.base,
  },
  newsListImg2: {
    width: Dimensions.get('window').width * 0.15,
    borderRadius: SIZES.font,
  },
  newsListDet2: {
    flexDirection: 'column',
    width: Dimensions.get('window').width * 0.82,
  },
  smallText: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: SIZES.font,
    color: COLORS.dark.background,
  },
  pubText: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: SIZES.small,
    color: COLORS.dark.background,
  },
  newsListDetExtra: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  newsListDetExtraLeft: {flexDirection: 'row', alignItems: 'center'},
  newsListDetExtraTxt: {
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: SIZES.small,
    color: COLORS.light.primary,
    textTransform: 'uppercase',
    marginLeft: 5,
  },
  newsListDetExtraRight: {flexDirection: 'row', alignItems: 'center'},
  newsListDetExtraRightView: {
    color: COLORS.dark.backgroundSoft,
    fontSize: SIZES.font,
    marginLeft: 2,
    fontFamily: 'IBMPlexSans-SemiBold',
  },

  //   news extra
  newsExtra: {padding: 14, paddingBottom: 50, alignItems: 'center'},
  newsExtraCard: {
    backgroundColor: COLORS.light.card,
    padding: 15,
    width: '90%',
    marginTop: -50,
  },
  newsExtraCardTxt1: {
    textAlign: 'center',
    color: COLORS.light.red,
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: SIZES.font,
    marginBottom: 10,
  },
  newsExtraCardTxt2: {
    textAlign: 'center',
    color: COLORS.light.black,
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: SIZES.font,
    marginBottom: 10,
  },
  newsExtraCardTxt3: {
    textAlign: 'center',
    color: COLORS.light.textSoft,
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: SIZES.large,
    marginBottom: 10,
  },
  newsExtraCardtxt4: {
    textAlign: 'left',
    color: COLORS.dark.textSoft,
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: SIZES.font,
  },
  publiciteImg: {height: 250, width: 250, marginTop: 20},
  actualites: {
    width: '100%',
    paddingVertical: 20,
    marginTop: 10,
  },
  text: {
    color: COLORS.light.primary,
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: SIZES.large,
    textAlign: 'left',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  serviceText: {
    color: COLORS.light.primary,
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: SIZES.large,
    textAlign: 'left',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  actualitesImgContainer: {marginHorizontal: 5},
  actualitesImg: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.4,
    borderRadius: SIZES.large,
  },
  shadowCon: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.4,
    borderRadius: SIZES.large,
    position: 'absolute',
    padding: 15,
  },
  actualitesTop: {flexDirection: 'row'},
  actualitesTxtCon: {
    flexDirection: 'column',
    width: '90%',
  },
  actualitesTxt: {
    color: COLORS.light.backgroundSoft,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.font,
  },
  actualitesSpan: {
    color: COLORS.light.background,
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: SIZES.extraLarge,
    marginTop: 15,
  },
  actualitesAuthor: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
    left: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
    borderWidth: 3,
    borderColor: COLORS.light.primary,
  },
  economieImgCon: {
    width: '100%',
    height: 250,
    backgroundColor: COLORS.light.gray,
  },
  economieImg: {width: '100%', height: '76%'},
  economieTxtCon: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  economieTextCon: {marginTop: 10},
  economieText: {
    fontFamily: 'IBMPlexSans-SemiBold',
    color: COLORS.dark.background,
    fontSize: SIZES.medium,
  },
  economieTextSpanCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  economieTextSpan: {
    fontFamily: 'IBMPlexSans-Regular',
    color: COLORS.dark.background,
    fontSize: SIZES.font,
    marginVertical: 10,
  },
  extraEconomieimg: {
    width: '100%',
    height: 180,
  },
  extraEconomie: {marginTop: 30, ...SHADOWS.dark},

  // videos
  videos: {marginTop: 50},
  videoTextCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  videoSeeAllTxt: {
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: SIZES.medium,
    color: COLORS.dark.backgroundSoft,
  },
  videosCon: {
    width: itemWidth * 0.85,
    height: itemHeight * 0.3,
    backgroundColor: COLORS.dark.background,
    margin: 5,
  },
  videosCon2: {
    width: itemWidth,
    height: itemHeight * 0.35,
    backgroundColor: COLORS.dark.background,
    marginBottom: 10,
  },
  videoText: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.medium,
    color: COLORS.light.background,
    margin: 10,
  },
  videosConImg: {
    width: '100%',
    height: '70%',
    opacity: 0.5,
  },
  videosPlayCon: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    top: 120,
    left: 20,
  },
  videosPlayText: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.font,
    color: COLORS.light.background,
    marginLeft: 5,
  },
  videosFooter: {marginTop: 20},
  videosFooterCon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginVertical: 15,
  },
  num: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: SIZES.xxxl,
    color: COLORS.dark.background,
    marginRight: 20,
  },
  servicesFooter: {marginTop: 20},
  serviceImg: {
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').height * 0.3,
    borderRadius: SIZES.font,
    marginHorizontal: 5,
  },
  footerText: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: SIZES.font,
    color: COLORS.dark.background,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 15,
  },

  // news details
  newsDetailsTop: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
  },
  newsDetailsCat: {flexDirection: 'row', alignItems: 'center'},
  newsDetailsAuthor: {flexDirection: 'row', alignItems: 'center'},
  profileText: {
    color: COLORS.dark.backgroundSoft,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.font,
  },
  titleText: {
    color: COLORS.dark.background,
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: SIZES.xxl,
    marginTop: 25,
  },
  titleDetails: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 20,
  },
  titleDetailTime: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  paragraphImg: {
    width: '100%',
    height: Dimensions.get('window').height * 0.4,
  },
  newsDetailsParagraph: {
    fontFamily: 'IBMPlexSans-Medium',
    color: COLORS.dark.background,
    fontSize: SIZES.medium,
    marginVertical: 20,
  },
  newsDetailsFooterCom: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.dark.textSoft,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  newsDetailsDown: {alignItems: 'center', marginBottom: 35},
  newsDetailsDownText: {
    color: COLORS.light.primary,
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: SIZES.font,
    textAlign: 'center',
    marginBottom: 10,
    textTransform: 'uppercase',
    marginTop: 50,
  },
  newsDetailsBtnText: {
    color: COLORS.light.background,
    textTransform: 'uppercase',
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: SIZES.medium,
  },
  newsDetailsBtn: {
    backgroundColor: COLORS.light.red,
    borderRadius: SIZES.base,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginBottom: 5,
    color: COLORS.light.background,
    height: SIZES.button,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // abonnement
  abonnement: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  abbonementImg: {width: 400, height: 200},
  abonnementDown: {
    flexDirection: 'row',
    marginTop: 40,
    flexWrap: 'wrap',
  },
  abonnementDownImgCon: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: itemWidth * 0.45,
    height: itemHeight * 0.3,
    borderColor: COLORS.dark.textSoft,
    borderWidth: 1,
    borderRadius: 20,
    margin: 6,
  },
  abonnementDownImg: {width: '70%', height: '70%'},
  abonnementText: {
    fontFamily: 'IBMPlexSans-Regular',
    color: COLORS.dark.background,
    fontSize: SIZES.font,
    marginVertical: 10,
    textAlign: 'center',
  },
  abonnementContainer: {
    position: 'absolute',
    top: 30,
    backgroundColor: COLORS.light.background,
    width: '95%',
    zIndex: 1,
    ...SHADOWS.dark,
    padding: 20,
    borderRadius: 20,
  },
  abonneFlexBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  abonneButtonSave: {
    backgroundColor: COLORS.light.primary,
    padding: 10,
    borderRadius: 5,
    width: 120,
    height: SIZES.button,
  },
  abonneButtonExit: {width: 120, height: SIZES.button, padding: 10},
  abonneButtonExitText: {
    color: COLORS.light.primary,
    textAlign: 'center',
    fontFamily: 'IBMPlexSans-Regular',
    textTransform: 'uppercase',
  },
  abonneButtonSaveText: {
    color: COLORS.light.background,
    textAlign: 'center',
    fontFamily: 'IBMPlexSans-Regular',
    textTransform: 'uppercase',
  },
  abonnementEditInput: {
    borderColor: COLORS.dark.textSoft,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 8,
    paddingHorizontal: 10,
  },
  abonnementEditOptionCon: {
    borderColor: COLORS.dark.textSoft,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  abonnementEditOption: {
    borderColor: COLORS.dark.textSoft,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.font,
    color: COLORS.dark.backgroundSoft,
  },
  abonnementDropTitle: {
    color: COLORS.dark.background,
    textAlign: 'center',
    fontFamily: 'IBMPlexSans-SemiBold',
    textTransform: 'uppercase',
    fontSize: SIZES.large,
  },
  abonnementDropSub: {
    color: COLORS.dark.background,
    textAlign: 'center',
    fontFamily: 'IBMPlexSans-Regular',
    textTransform: 'uppercase',
    fontSize: SIZES.base,
    marginBottom: 20,
  },
  abonnementConSha: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingBottom: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    height: '100%',
  },

  // category
  catConCom: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: COLORS.light.backgroundSoft,
  },
  catCon: {
    flexDirection: 'row',
    padding: 0,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
  },
  catItem: {height: itemHeight * 0.2, width: itemWidth * 0.4, margin: 8},
  catItemLayer: {
    position: 'absolute',
    height: itemHeight * 0.2,
    width: itemWidth * 0.4,
    borderRadius: 20,
  },
  catImg: {height: '100%', width: '100%', borderRadius: 20},
  catExtraCom: {
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  catIcon: {height: 30, width: 30},
  catText: {
    color: COLORS.light.background,
    fontFamily: 'IBMPlexSans-Bold',
    textTransform: 'uppercase',
    fontSize: SIZES.font,
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  catBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLORS.light.red,
    padding: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    height: SIZES.button,
  },
  catBtnTxt: {
    color: COLORS.light.primary,
    fontFamily: 'IBMPlexSans-SemiBold',
    textTransform: 'capitalize',
    fontSize: SIZES.medium,
  },

  // settings
  settingsCon: {width: '100%'},
  settingsItems: {paddingVertical: 10},
  settingsItemLabel: {
    color: COLORS.light.primary,
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: SIZES.large,
    paddingHorizontal: 20,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 35,
    marginTop: 5,
  },
  settingsItemText: {
    color: COLORS.dark.background,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.font,
    marginLeft: 10,
  },
  settingsItemTextDark: {
    color: COLORS.light.background,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.font,
    marginLeft: 10,
  },
  settingsItemTextSpan: {color: COLORS.light.textSoft, marginLeft: 10},
  settingsItemTextSpanDark: {color: COLORS.light.textSoft, marginLeft: 10},
  settingFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  // font resize
  fontResizeSlide: {flexDirection: 'row', alignItems: 'center', padding: 20},
  fontResizeBox: {padding: 10, marginTop: 5},
  fontResizeBoxLabel: {
    color: COLORS.dark.backgroundSoft,
    fontFamily: 'IBMPlexSans-Regular',
  },
  fontResizeTestBox: {
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.dark.textSoft,
    marginTop: 20,
    fontFamily: 'IBMPlexSans-Regular',
    color: COLORS.dark.backgroundSoft,
  },
  fontSizeLabel: {
    color: COLORS.dark.background,
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: SIZES.extraLarge,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  // search
  search: {
    borderWidth: 1,
    borderColor: COLORS.dark.textSoft,
    width: itemWidth * 0.95,
    height: itemHeight * 0.075,
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchText: {
    color: COLORS.dark.background,
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: SIZES.font,
    width: '90%',
  },
  recherceTags: {
    // marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  rapidetxt: {
    color: COLORS.dark.backgroundSoft,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.font,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  recherceTagsBtn: {
    backgroundColor: COLORS.light.primary,
    paddingHorizontal: 12,
    borderRadius: SIZES.medium,
    paddingVertical: 5,
    margin: 4,
  },
  recherceTagsBtnTxt: {
    color: COLORS.light.white,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.font,
  },

  // register
  media: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
  },
  mediaText: {
    color: COLORS.dark.background,
    fontSize: SIZES.medium,
    fontFamily: 'IBMPlexSans-Regular',
    width: '70%',
  },
  mediaImg: {height: itemHeight * 0.09, width: itemWidth * 0.2},
  inputContainer: {width: '100%', paddingHorizontal: 20, marginTop: 10},
  input: {
    color: COLORS.light.textSoft,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.dark.textSoft,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.font,
  },
  loginContainer: {
    flexDirection: 'column-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 50,
  },
  passwordCon: {position: 'relative'},
  passwordIcon: {position: 'absolute', right: 0, top: 15},
  forgetText: {
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: SIZES.font,
    color: COLORS.light.primary,
  },
  regButton: {
    backgroundColor: COLORS.dark.textSoft,
    padding: 13,
    height: SIZES.button,
  },
  regText: {
    color: COLORS.light.textSoft,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: SIZES.font,
  },
  authButton: {
    backgroundColor: COLORS.light.background,
    padding: 12,
    marginTop: 10,
    borderWidth: 1,
    borderColor: COLORS.dark.textSoft,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  authText: {
    color: COLORS.light.textSoft,
    textAlign: 'center',
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: SIZES.font,
  },
  authImg: {height: itemHeight * 0.02, width: itemWidth * 0.2},
  authImgApple: {height: 25, width: 25},
  compteText: {
    color: COLORS.light.textSoft,
    textAlign: 'left',
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: SIZES.font,
    marginTop: 15,
  },
  dejaContainer: {
    backgroundColor: COLORS.dark.textSoft,
    flexDirection: 'row',
    marginTop: 15,
    padding: 15,
    alignItems: 'center',
    width: '90%',
    justifyContent: 'space-between',
  },
  dejaText: {
    color: COLORS.light.textSoft,
    textAlign: 'left',
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.font,
    width: '50%',
  },
  dejaText2: {
    color: COLORS.light.primary,
    textAlign: 'left',
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: SIZES.font,
    textTransform: 'capitalize',
  },

  // change password
  changePasswordOverlay: {
    backgroundColor: COLORS.dark.backgroundSoft,
    opacity: 0.4,
    width: itemWidth,
    height: itemHeight,
    position: 'absolute',
    top: 0,
  },
  changePasswordCon: {
    backgroundColor: 'white',
    width: '100%',
    // height: 80,
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 9,
    ...SHADOWS.dark,
    bottom: 0,
    paddingBottom: 25,
  },
  mobileDivider: {
    backgroundColor: COLORS.dark.textSoft,
    height: 5,
    width: 100,
    borderRadius: 20,
    zIndex: 999,
  },

  // notification
  notification: {
    backgroundColor: 'whitesmoke',
    width: '100%',
    height: 80,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 999,
  },

  // profile
  profileTopCon: {
    width: '100%',
    height: itemHeight * 0.2,
    backgroundColor: COLORS.light.primary,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    padding: 10,
    position: 'relative',
    marginBottom: 50,
  },
  profileName: {
    textAlign: 'center',
    fontFamily: 'IBMPlexSans-SemiBold',
    fontSize: SIZES.medium,
    textTransform: 'capitalize',
    color: COLORS.light.background,
  },
  profileIconCon: {
    backgroundColor: COLORS.light.background,
    borderWidth: 1,
    borderColor: COLORS.light.primary,
    width: itemWidth * 0.2,
    height: itemHeight * 0.1,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: itemWidth / 2.5,
    bottom: -30,
  },
  profileItems: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomColor: COLORS.light.primary,
    borderBottomWidth: 1,
    padding: 15,
  },
  profileItem: {
    color: COLORS.dark.backgroundSoft,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.medium,
    marginLeft: 10,
  },
  logoutBtn: {
    backgroundColor: COLORS.light.primary,
    padding: 15,
    borderRadius: 20,
    marginTop: 60,
    paddingHorizontal: 25,
  },
  logoutTxt: {
    color: COLORS.light.background,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.medium,
  },

  // no data
  noData: {
    color: COLORS.dark.background,
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: SIZES.medium,
    textAlign: 'center',
    marginTop: '10%',
  },
});
