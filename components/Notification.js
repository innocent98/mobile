import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import {useEffect, useRef, useState} from 'react';
import {COLORS, messages, SIZES} from '../constants';
import {useSelector} from 'react-redux';
import {userRequest} from '../redux/requestMethod';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {io} from 'socket.io-client';
import moment from 'moment';
import DocumentPicker from 'react-native-document-picker';

export const NotificationList = ({data}) => {
  return (
    <View>
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationText}>{data.text}</Text>
        <Text style={styles.notificationTime}>
          {moment(data.createdAt).fromNow()}
        </Text>
      </View>
    </View>
  );
};

const Notification = ({route}) => {
  // const {notifications} = route.params;
  const user = useSelector(state => state.user.currentUser);
  const [notifications, setNotifications] = useState([]);
  const [newNotification, setNewNotification] = useState('');
  const [arrivalNotification, setArrivalNotification] = useState(null);
  const socket = useRef();

  const scrollRef = useRef();
  const cancelToken = axios.CancelToken.source();

  // socket
  useEffect(() => {
    socket.current = io('ws://192.168.1.79:8900');
    // get socket.io message
    socket.current.on('getNotification', credential => {
      setArrivalNotification({
        sender: credential.senderId,
        text: credential.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalNotification &&
      // data?.members.includes(arrivalNotification.sender) &&
      setNotifications(prev => [...prev, arrivalNotification]);
  }, [arrivalNotification]);
  // console.log(arrivalNotification);

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

  const handleTextChange = value => {
    setNewNotification(value);
  };

  // send new notification
  const handleNewNotification = async () => {
    const notification = {
      sender: user?._id,
      text: newNotification.trim(),
    };

    socket.current.emit('sendNotification', {
      senderId: user?._id,
      text: newNotification.trim(),
    });

    try {
      if (newNotification && newNotification.trim()) {
        const res = await userRequest.post(
          `/messages/notification`,
          notification,
        );
        setNotifications(prev => [...prev, res.data]);
        setNewNotification('');
      }
    } catch (error) {}
  };

  const openLibrary = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log(res[0].uri);
    } catch (error) {}
  };

  const openPdfLibrary = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      console.log(res[0].uri);
    } catch (error) {}
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
      <View style={styles.container}>
        <FlatList
          data={notifications}
          renderItem={({item}) => <NotificationList data={item} />}
          keyExtractor={item => item._id}
          showsVerticalScrollIndicator={false}
        />

        {user.role !== 'student' && (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type a message"
              placeholderTextColor={COLORS.white}
              multiline
              onChangeText={handleTextChange}
              value={newNotification}
            />
            <TouchableHighlight
              underlayColor="transparent"
              onPress={openPdfLibrary}>
              <Icon name="attach-file" size={20} color={COLORS.white} />
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={openLibrary}>
              <Icon name="photo-camera" size={20} color={COLORS.white} />
            </TouchableHighlight>
            <TouchableHighlight
              onPress={handleNewNotification}
              style={styles.icon}
              underlayColor="transparent">
              <Icon name="send" size={28} color={COLORS.white} />
            </TouchableHighlight>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {padding: 10, flex: 1, alignItems: 'center'},
  notificationContainer: {
    backgroundColor: COLORS.secondary,
    width: Dimensions.get('window').width / 1.1,
    padding: 10,
    marginBottom: 5,
    borderRadius: SIZES.font,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notificationText: {fontFamily: 'RobotoSlab-Regular', color: COLORS.white},
  notificationTime: {
    fontFamily: 'RobotoSlab-Regular',
    color: COLORS.white,
    fontSize: SIZES.small,
    marginTop: 20,
  },
  inputContainer: {
    backgroundColor: COLORS.gray,
    padding: 2,
    paddingHorizontal: 15,
    borderRadius: SIZES.extraLarge,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxHeight: 120,
  },
  input: {borderRadius: SIZES.large, width: '70%'},
  startContainer: {
    // height: Dimensions.get('window').height / 1.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startText: {
    color: COLORS.gray,
    fontFamily: 'RobotoSlab-Medium',
    fontSize: SIZES.extraLarge,
  },
  icon: {marginLeft: 10},
});

export default Notification;
