import {View, SafeAreaView, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from '../constants/styles';
import {TopComp} from '../components/Top';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS, SIZES} from '../constants/theme';
import {useState} from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {useEffect} from 'react';
import {makeGetHeader} from '../redux/apiCalls';
import {useNavigation} from '@react-navigation/native';
import {Divider} from 'react-native-paper';
import moment from 'moment';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const NewsPaper = ({data, index, message}) => {
  const isDark = useSelector(state => state.theme.isDark);
  const navigation = useNavigation();

  return (
    <RectButton
      onPress={() =>
        navigation.navigate('ReadPDF', {
          detUrl: `newspapers/${data.id}`,
          data,
        })
      }
      key={index}>
      {index === 0 && (
        <Text
          style={[
            styles.rapidetxt,
            {color: COLORS.light.primary},
          ]}>{`${message?.length} Document(s)`}</Text>
      )}
      <View style={[styles.newsList2, {alignItems: 'center'}]}>
        <Icon
          name="picture-as-pdf"
          size={30}
          color={COLORS.light.primary}
          style={styles.newsListImg2}
        />
        <View style={styles.newsListDet2}>
          <Text
            style={[
              styles.smallText,
              isDark && {color: COLORS.light.backgroundSoft},
            ]}
            numberOfLines={2}
            ellipsizeMode="tail">
            {data?.title}
          </Text>
          <View style={styles.newsListDetExtra}>
            <View style={styles.newsListDetExtraLeft}>
              <Icon
                name="circle"
                color={isDark ? COLORS.light.background : COLORS.light.primary}
                size={8}
              />
              <Text
                style={[
                  styles.newsListDetExtraTxt,
                  isDark && {color: COLORS.light.backgroundSoft},
                ]}>
                {data.categorie}
              </Text>
            </View>
            <View style={[styles.newsListDetExtraRight, {marginHorizontal: 5}]}>
              <Text style={styles.newsListDetExtraRightView}>
                {moment(data?.created_at).format('DD-MM-YYYY')}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Divider />
    </RectButton>
  );
};

const NewsCasts = ({data, index, message}) => {
  const isDark = useSelector(state => state.theme.isDark);
  const navigation = useNavigation();

  return (
    <RectButton
      onPress={() =>
        navigation.navigate('NewsDetails', {
          detUrl: `/newscasts/${data.permalink}`,
          data,
        })
      }
      key={index}>
      {index === 0 && (
        <Text
          style={[
            styles.rapidetxt,
            {color: COLORS.light.primary},
          ]}>{`${message?.length} Document(s)`}</Text>
      )}
      <View style={[styles.newsList2, {alignItems: 'center'}]}>
        <Icon
          name="payments"
          size={30}
          color={COLORS.light.primary}
          style={styles.newsListImg2}
        />
        <View style={styles.newsListDet2}>
          <Text
            style={[
              styles.smallText,
              isDark && {color: COLORS.light.backgroundSoft},
            ]}
            numberOfLines={2}
            ellipsizeMode="tail">
            {data?.title}
          </Text>
          <View style={styles.newsListDetExtra}>
            <View style={styles.newsListDetExtraLeft}>
              <Icon
                name="circle"
                color={isDark ? COLORS.light.background : COLORS.light.primary}
                size={8}
              />
              <Text
                style={[
                  styles.newsListDetExtraTxt,
                  isDark && {color: COLORS.light.backgroundSoft},
                ]}>
                {data.categorie}
              </Text>
            </View>
            <View style={[styles.newsListDetExtraRight, {marginHorizontal: 5}]}>
              <Text style={styles.newsListDetExtraRightView}>
                {moment(data?.created_at).format('DD-MM-YYYY')}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Divider />
    </RectButton>
  );
};

const Subscriptions = ({data, index, message}) => {
  return (
    <RectButton key={index}>
      {index === 0 && (
        <Text
          style={[
            styles.rapidetxt,
            {color: COLORS.light.primary},
          ]}>{`${message?.length} Document(s)`}</Text>
      )}
      <View style={[styles.newsList2, {alignItems: 'center'}]}>
        <Icon
          name="payments"
          size={30}
          color={COLORS.light.primary}
          style={styles.newsListImg2}
        />
        <View style={styles.newsListDet2}>
          <Text
            style={[
              styles.smallText,
              isDark && {color: COLORS.light.backgroundSoft},
            ]}
            numberOfLines={2}
            ellipsizeMode="tail">
            {data?.title}
          </Text>
          <View style={styles.newsListDetExtra}>
            <View style={styles.newsListDetExtraLeft}>
              <Icon
                name="circle"
                color={isDark ? COLORS.light.background : COLORS.light.primary}
                size={8}
              />
              <Text
                style={[
                  styles.newsListDetExtraTxt,
                  isDark && {color: COLORS.light.backgroundSoft},
                ]}>
                {data.categorie}
              </Text>
            </View>
            <View style={[styles.newsListDetExtraRight, {marginHorizontal: 5}]}>
              <Text style={styles.newsListDetExtraRightView}>
                {moment(data?.created_at).format('DD-MM-YYYY')}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Divider />
    </RectButton>
  );
};

const Tab1 = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const user = useSelector(state => state.user.currentUser);
  // console.log(user)
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [message, setMessage] = useState([]);

  const headers = {
    Authorization: `Bearer ${user?.token}`,
  };

  const fetchTags = () => {
    makeGetHeader(dispatch, `/auth/newspapers`, headers, setMessage);
  };
  useEffect(() => {
    let unsubscribed = false;
    if (!unsubscribed) {
      fetchTags();
    }
    return () => {
      unsubscribed = true;
    };
  }, [setMessage]);
  // console.log(message);

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={[styles.container, {paddingBottom: 0, paddingVertical: 0}]}>
        {/* <TopComp /> */}

        {message?.length === 0 ? (
          <Text
            style={[
              styles.noData,
              isDark && {color: COLORS.light.backgroundSoft},
            ]}>
            Aucune information disponible
          </Text>
        ) : (
          <View>
            <FlatList
              data={message}
              renderItem={({item, index}) => (
                <NewsPaper data={item} index={index} message={message} />
              )}
              keyExtractor={(item, index) => index}
              refreshing={false}
              onRefresh={fetchTags}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const Tab2 = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const user = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [message, setMessage] = useState([]);

  const headers = {
    Authorization: `Bearer ${user?.token}`,
  };

  const fetchTags = () => {
    makeGetHeader(dispatch, `/auth/newscasts`, headers, setMessage);
  };
  useEffect(() => {
    let unsubscribed = false;
    if (!unsubscribed) {
      fetchTags();
    }
    return () => {
      unsubscribed = true;
    };
  }, [setMessage]);
  // console.log(message);

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={[styles.container, {paddingBottom: 0, paddingVertical: 0}]}>
        {/* <TopComp /> */}

        {message?.length === 0 ? (
          <Text
            style={[
              styles.noData,
              isDark && {color: COLORS.light.backgroundSoft},
            ]}>
            Aucune information disponible
          </Text>
        ) : (
          <View>
            <FlatList
              data={message}
              renderItem={({item, index}) => (
                <NewsCasts data={item} index={index} message={message} />
              )}
              keyExtractor={(item, index) => index}
              refreshing={false}
              onRefresh={fetchTags}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const Tab3 = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const user = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [message, setMessage] = useState([]);

  const headers = {
    Authorization: `Bearer ${user?.token}`,
  };

  const fetchTags = () => {
    makeGetHeader(dispatch, `/auth/subscriptions`, headers, setMessage);
  };
  useEffect(() => {
    let unsubscribed = false;
    if (!unsubscribed) {
      fetchTags();
    }
    return () => {
      unsubscribed = true;
    };
  }, [setMessage]);
  // console.log(message);

  return (
    <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
      <View style={[styles.container, {paddingBottom: 0, paddingVertical: 0}]}>
        {/* <TopComp /> */}

        {message?.length === 0 ? (
          <Text
            style={[
              styles.noData,
              isDark && {color: COLORS.light.backgroundSoft},
            ]}>
            Aucune information disponible
          </Text>
        ) : (
          <View>
            <FlatList
              data={message}
              renderItem={({item, index}) => (
                <Subscriptions data={item} index={index} message={message} />
              )}
              keyExtractor={(item, index) => index}
              refreshing={false}
              onRefresh={fetchTags}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const Journal = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const user = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [message, setMessage] = useState([]);

  const headers = {
    Authorization: `Bearer ${user?.token}`,
  };

  useEffect(() => {
    let unsubscribed = false;
    if (!unsubscribed) {
      const fetchTags = () => {
        makeGetHeader(dispatch, `/auth/subcriptions`, headers, setMessage);
      };
      fetchTags();
    }
    return () => {
      unsubscribed = true;
    };
  }, [setMessage]);
  // console.log(message[0]?.newspaper_abonment);

  return (
    <>
      <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
        <View style={[styles.container, {paddingBottom: 0}]}>
          <View style={styles.topContainer}>
            <TopComp />
          </View>
        </View>
        <Tab.Navigator
          initialRouteName="Alaune"
          screenOptions={{
            tabBarActiveTintColor: COLORS.light.white,
            tabBarInactiveTintColor: isDark ? COLORS.light.secondary : '#000',
            tabBarIndicatorStyle: {
              backgroundColor: COLORS.light.primary,
              height: '100%',
              // width: '50%',
            },
            tabBarStyle: {
              backgroundColor: isDark
                ? COLORS.dark.background
                : COLORS.light.background,
            },
            tabBarLabelStyle: {
              fontFamily: 'IBMPlexSans-Medium',
              fontSize: SIZES.small,
            },
          }}>
          <Tab.Screen name="Mes Journaux" component={Tab1} />
          <Tab.Screen name="Mes dossiers" component={Tab2} />
          <Tab.Screen name="Mes abonnement" component={Tab3} />
        </Tab.Navigator>
      </SafeAreaView>
    </>
  );
};
// return (
//   <SafeAreaView style={isDark ? styles.safeAreaDark : styles.safeArea}>
//     <View style={styles.container}>
//       <TopComp />

//       <Tab.Navigator
//         initialRouteName="Alaune"
//         screenOptions={{
//           tabBarScrollEnabled: true,
//           tabBarActiveTintColor: COLORS.light.white,
//           tabBarInactiveTintColor: isDark ? COLORS.light.secondary : '#000',
//           tabBarIndicatorStyle: {
//             backgroundColor: COLORS.light.primary,
//             height: '95%',
//             borderRadius: 30,
//             marginHorizontal: 5,
//           },
//           tabBarStyle: {
//             backgroundColor: isDark
//               ? COLORS.dark.background
//               : COLORS.light.background,
//           },
//           tabBarLabelStyle: {
//             fontFamily: 'IBMPlexSans-Medium',
//             fontSize: SIZES.small,
//           },
//         }}>
//         <Tab.Screen name="A la une" component={Alaune} />
//         <Tab.Screen name="A la une2" component={Alaune} />
//       </Tab.Navigator>
//       <Text>hey</Text>

//       {/* <ScrollView style={{height: '89%', width: '100%'}}>
//         {message[0]?.newspaper_abonment?.length === 0 ? (
//           <Text
//             style={[
//               styles.noData,
//               isDark && {color: COLORS.light.backgroundSoft},
//             ]}>
//             Aucune information disponible
//           </Text>
//         ) : (
//           <View>
//             {message[0]?.newspaper_abonment?.map((data, index) => (
//               <View key={index}>
//                 <RectButton
//                   onPress={() =>
//                     navigation.navigate('ReadPDF', {
//                       detUrl: `/newscasts/${data.id}`,
//                       data,
//                     })
//                   }
//                   key={index}>
//                   {index === 0 && (
//                     <Text
//                       style={[
//                         styles.rapidetxt,
//                         {color: COLORS.light.primary},
//                       ]}>{`${message?.latestNewspapers?.length} Document(s)`}</Text>
//                   )}
//                   <View style={styles.newsList2}>
//                     <Icon
//                       name="picture-as-pdf"
//                       size={50}
//                       color={COLORS.light.primary}
//                       style={styles.newsListImg2}
//                     />
//                     <View style={styles.newsListDet2}>
//                       <Text
//                         style={[
//                           styles.smallText,
//                           isDark && {color: COLORS.light.backgroundSoft},
//                         ]}
//                         numberOfLines={2}
//                         ellipsizeMode="tail">
//                         {data?.title}
//                       </Text>
//                       <View style={styles.newsListDetExtra}>
//                         <View style={styles.newsListDetExtraLeft}>
//                           <Icon
//                             name="circle"
//                             color={
//                               isDark
//                                 ? COLORS.light.background
//                                 : COLORS.light.primary
//                             }
//                             size={8}
//                           />
//                           <Text
//                             style={[
//                               styles.newsListDetExtraTxt,
//                               isDark && {color: COLORS.light.backgroundSoft},
//                             ]}>
//                             {data.categorie}
//                           </Text>
//                         </View>
//                         <View
//                           style={[
//                             styles.newsListDetExtraRight,
//                             {marginHorizontal: 5},
//                           ]}>
//                           <Text style={styles.newsListDetExtraRightView}>
//                             {moment(data?.created_at).format('DD-MM-YYYY')}
//                           </Text>
//                         </View>
//                       </View>
//                     </View>
//                   </View>
//                   <Divider />
//                 </RectButton>
//               </View>
//             ))}
//           </View>
//         )}
//       </ScrollView> */}
//     </View>
//   </SafeAreaView>
// );

export default Journal;
