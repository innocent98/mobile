import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {COLORS, SIZES} from '../constants';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {userRequest} from '../redux/requestMethod';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import {io} from 'socket.io-client';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  RectButton,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export const FriendList = prop => {
  const user = useSelector(state => state.user.currentUser);
  const {data, getConversation} = prop;
  // console.log(data)

  const navigation = useNavigation();

  const cancelToken = axios.CancelToken.source();
  const username = data?.username;

  // make a new conversation and navigate to messenger screen
  const newConversation = async () => {
    const members = {
      senderId: user._id,
      receiverId: data._id,
    };
    try {
      const res = await userRequest.post('/conversations', members);
      const conId = res.data._id || res.data[0]._id;
      getConversation();
      navigation.navigate('Chat', {
        screen: 'Messenger',
        params: {conId, username},
      });
    } catch (error) {}
  };

  return (
    <>
      {data?.role && (
        <TouchableHighlight
          underlayColor="lightgray"
          style={styles.button}
          onPress={newConversation}>
          {user?._id !== data?._id && user?.role === 'student' ? (
            <>
              {data?.role === 'bursar' && (
                <View style={styles.friendContainer}>
                  <FastImage
                    style={styles.img}
                    source={{
                      uri: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
                      priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                  <Text style={styles.username}>{data?.username}</Text>
                </View>
              )}
            </>
          ) : (
            <>
              {user._id !== data._id && data?.role !== 'student' && (
                <View style={styles.friendContainer}>
                  <FastImage
                    style={styles.img}
                    source={{
                      uri: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
                      priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                  <Text style={styles.username}>{data?.username}</Text>
                </View>
              )}
            </>
          )}
        </TouchableHighlight>
      )}
    </>
  );
};

export const ChatList = ({data}) => {
  const user = useSelector(state => state.user.currentUser);
  const [users, setUsers] = useState('');
  const [messages, setMessages] = useState(null);

  const navigation = useNavigation();

  const cancelToken = axios.CancelToken.source();

  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <RectButton style={styles.leftAction} onPress={this.close}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{translateX: trans}],
            },
          ]}>
          Delete Chat
        </Animated.Text>
      </RectButton>
    );
  };

  // get user list
  const getUser = async () => {
    const friendId = data.members.find(m => m !== user?._id);
    try {
      const res = await userRequest.get(`/users/?userId=${friendId}`, {
        cancelToken: cancelToken.token,
      });
      setUsers(res.data);
    } catch (error) {}
  };

  // get message
  const getmessages = async () => {
    try {
      const res = await userRequest.get(`/messages/${data?._id}`, {
        cancelToken: cancelToken.token,
      });
      setMessages(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getUser();
      getmessages();
    }, 1000);
    return () => {
      clearInterval(interval);
      cancelToken.cancel();
    };
  }, [setMessages, data]);

  const lastMessage = messages?.slice(-1)[0];
  const username = users?.username;

  // date function
  const [date, setDate] = useState(lastMessage?.createdAt);
  useEffect(() => {
    if (moment(lastMessage?.createdAt).fromNow() === 'a day ago') {
      setDate(moment(lastMessage?.createdAt).fromNow());
    } else if (
      moment(lastMessage?.createdAt).subtract().calendar().includes('Today')
    ) {
      setDate(moment(lastMessage?.createdAt).subtract().calendar());
    } else if (
      moment(lastMessage?.createdAt).subtract().calendar().includes('Yesterday')
    ) {
      setDate(moment(lastMessage?.createdAt).subtract().calendar());
    } else {
      setDate(moment(lastMessage?.createdAt).format('L'));
    }
  }, []);

  return (
    <Swipeable renderLeftActions={renderLeftActions}>
      <RectButton
        underlayColor="white"
        onPress={() =>
          navigation.navigate('Chat', {
            screen: 'Messenger',
            params: {data, username},
          })
        }
        style={styles.conversationContainer}>
        <View accessible accessibilityRole="button">
          <Text style={styles.name}>{username}</Text>
          <View style={styles.details}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {lastMessage?.img ? (
                <>
                  <Icon name="image" size={20} color={COLORS.gray} />
                  <Text style={styles.lastMessage} numberOfLines={1}>
                    {lastMessage?.text ? lastMessage?.text : 'Photo'}
                  </Text>
                </>
              ) : lastMessage?.file ? (
                <Icon name="description" size={20} color={COLORS.gray} />
              ) : (
                <Text style={styles.lastMessage}>{lastMessage?.text}</Text>
              )}
            </View>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
      </RectButton>
    </Swipeable>
  );
};

const Chat = () => {
  const user = useSelector(state => state.user.currentUser);
  const [conversation, setConversation] = useState([]);
  const [friends, setFriends] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const socket = useRef();

  const cancelToken = axios.CancelToken.source();
  const navigation = useNavigation();

  // socket
  useEffect(() => {
    socket.current = io('https://psocket.innotech.monster/');
  }, []);

  useEffect(() => {
    socket.current.emit('addUser', user._id);
    socket.current.on('getUsers', users => {
      setOnlineUsers(users);
    });
  }, [socket, user]);

  // get conversation
  const getConversation = async () => {
    try {
      const res = await userRequest.get(`/conversations/${user?._id}`, {
        cancelToken: cancelToken.token,
      });
      setConversation(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getConversation();
    return () => {
      cancelToken.cancel();
    };
  }, [user]);

  // get friends
  useEffect(() => {
    const getFriends = async () => {
      try {
        const res = await userRequest.get(`/users/users/all`, {
          cancelToken: cancelToken.token,
        });
        const resd = await userRequest.get(`/conversations/${user?._id}`, {
          cancelToken: cancelToken.token,
        });
        setFriends(res.data);
      } catch (error) {
        // Alert.alert(error.response.message);
      }
    };
    getFriends();
    return () => {
      cancelToken.cancel();
    };
  }, [user, setFriends]);

  // get notifications
  useEffect(() => {
    const getNotification = async () => {
      try {
        const res = await userRequest.get(`/messages/notification/all`, {
          cancelToken: cancelToken.token,
        });
        setNotifications(res.data);
      } catch (error) {}
    };
    getNotification();
    return () => {
      cancelToken.cancel();
    };
  }, [setNotifications]);

  const merge = [...friends, ...conversation];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
      <View style={styles.container}>
        <FlatList
          data={merge}
          renderItem={({item}) => (
            <FriendList
              data={item}
              onlineUsers={onlineUsers}
              getConversation={getConversation}
            />
          )}
          keyExtractor={item => item?._id}
          horizontal
        />
        <Text style={styles.dm}>Send a dm...</Text>
        <FlatList
          data={conversation}
          renderItem={({item}) => <ChatList data={item} />}
          keyExtractor={item => item?._id}
          ListHeaderComponent={() => (
            <>
              {user.role !== 'student' && (
                <View style={{marginBottom: 10}}>
                  <TouchableHighlight
                    underlayColor={COLORS.background}
                    onPress={() =>
                      navigation.navigate('Dashboard', {
                        screen: 'Notification',
                        params: {notifications},
                      })
                    }>
                    <Text
                      style={{
                        color: '#000',
                        fontFamily: 'RobotoSlab-Regular',
                        fontSize: SIZES.medium,
                      }}>
                      Send a broadcast message
                    </Text>
                  </TouchableHighlight>
                </View>
              )}
            </>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {padding: 15},
  conversationContainer: {
    marginBottom: 15,
    backgroundColor: 'whitesmoke',
    padding: 5,
  },
  name: {
    color: '#000',
    fontFamily: 'RobotoSlab-Medium',
    fontSize: SIZES.large,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastMessage: {
    color: COLORS.gray,
    fontFamily: 'RobotoSlab-Regular',
    fontSize: SIZES.small,
    width: Dimensions.get('window').width / 2,
  },
  date: {
    color: COLORS.gray,
    fontFamily: 'RobotoSlab-Regular',
    fontSize: SIZES.small,
  },
  dm: {
    color: '#000',
    fontFamily: 'RobotoSlab-Regular',
    fontSize: SIZES.large,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 1,
    marginBottom: 20,
    marginTop: 15,
  },
  button: {
    borderRadius: SIZES.large,
    // marginRight: 20,
  },
  friendContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {width: 50, height: 50, borderRadius: SIZES.large},
  username: {
    color: '#000',
    fontFamily: 'RobotoSlab-Medium',
    fontSize: SIZES.small,
    textAlign: 'center',
  },
  leftAction: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 100,
  },
  actionText: {
    fontFamily: 'RobotoSlab-Medium',
    color: COLORS.white,
  },
});

export default Chat;
