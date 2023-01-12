import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Alert,
  Dimensions,
  Image,
  ScrollView,
  PermissionsAndroid,
  Platform,
  Animated,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {COLORS, SIZES} from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import {userRequest} from '../constants/context/config';
import {useSelector} from 'react-redux';
import DocumentPicker from 'react-native-document-picker';
import FastImage from 'react-native-fast-image';
import {io} from 'socket.io-client';
import moment from 'moment';
import RNFetchBlob from 'rn-fetch-blob';
import {RectButton, BorderlessButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export const MessengerList = ({data}) => {
  const user = useSelector(state => state.user.currentUser);
  const [date, setDate] = useState(data?.createdAt);

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
          Delete Message
        </Animated.Text>
      </RectButton>
    );
  };

  const REMOTE_IMAGE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/gift.png';
  const checkPermission = async () => {
    if (Platform.OS === 'ios') {
      downloadImage();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to download File',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Once user grant the permission start downloading
          console.log('Storage Permission Granted.');
          downloadImage();
        } else {
          // If permission denied then show alert
          alert('Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.warn(err);
      }
    }
  };

  const downloadImage = () => {
    // Main function to download the image

    // To add the time suffix in filename
    let date = new Date();
    // Image URL which we want to download
    let image_URL = REMOTE_IMAGE_PATH;
    // Getting the extention of the file
    let ext = getExtention(image_URL);
    ext = '.' + ext[0];
    // Get config and fs from RNFetchBlob
    // config: To pass the downloading related options
    // fs: Directory path where we want our image to download
    const {config, fs} = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        // Related to the Android only
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/image_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: 'Image',
      },
    };
    config(options)
      .fetch('GET', image_URL)
      .then(res => {
        // Showing alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        alert('Image Downloaded Successfully.');
      });
  };

  const getExtention = filename => {
    // To get the file extension
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };

  // date function
  useEffect(() => {
    if (moment(data?.createdAt).fromNow() === 'a day ago') {
      setDate(moment(data?.createdAt).fromNow());
    } else if (
      moment(data?.createdAt).subtract().calendar().includes('Today')
    ) {
      setDate(moment(data?.createdAt).subtract().calendar());
    } else if (
      moment(data?.createdAt).subtract().calendar().includes('Yesterday')
    ) {
      setDate(moment(data?.createdAt).subtract().calendar());
    } else {
      setDate(moment(data?.createdAt).format('L'));
    }
  }, []);
  return (
    <Swipeable renderLeftActions={renderLeftActions}>
      <View style={{flex: 1}}>
        {data ? (
          <View
            style={
              data?.sender === user?._id
                ? styles.messageSender
                : styles.messageReceiver
            }>
            {data.img && (
              <FastImage
                style={{height: 320, width: '100%'}}
                source={{
                  uri: data.img,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            )}
            {data.file && (
              <View style={styles.fileContainer}>
                <Text style={styles.fileName}>{data?.fileName}</Text>
                <Icon
                  name="cloud-download"
                  color={COLORS.white}
                  size={32}
                  onPress={checkPermission}
                />
              </View>
            )}
            <View>
              <Text style={styles.message} selectable>
                {data?.text && data?.text}
              </Text>
              <Text style={styles.time}>{date}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.startContainer}>
            <Text style={styles.startText}>Start a conversation</Text>
          </View>
        )}
      </View>
    </Swipeable>
  );
};

const Messenger = ({route}) => {
  const user = useSelector(state => state.user.currentUser);
  const {data, conId} = route.params;
  const username = route.params.username;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [img, setImg] = useState('');
  const [file, setFile] = useState('');
  const [urlFileName, setUrlFileName] = useState('');

  const socket = useRef();
  const scrollRef = useRef();

  const cancelToken = axios.CancelToken.source();

  // socket
  useEffect(() => {
    socket.current = io('https://psocket.innotech.monster/');
    // get socket.io message
    socket.current.on('getMessage', credential => {
      setArrivalMessage({
        sender: credential.senderId,
        text: credential.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      data?.members.includes(arrivalMessage.sender) &&
      setMessages(prev => [...prev, arrivalMessage]);
  }, [arrivalMessage, data]);

  // get messages
  const getmessages = async () => {
    try {
      const res = await userRequest.get(`https://papi.innotech.monster/api/messages/${data?._id || conId}`, {
        cancelToken: cancelToken.token,
      });
      setMessages(res.data);
    } catch (error) {}
  };
  // console.log(messages);

  useEffect(() => {
    getmessages();
    return () => {
      cancelToken.cancel();
    };
  }, [data, setMessages]);

  const handleTextChange = value => {
    setNewMessage(value);
  };

  const openLibrary = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      setImg(res[0].uri);
    } catch (error) {}
  };

  const openPdfLibrary = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setFile(res[0].uri);
      setUrlFileName(res[0].name);
    } catch (error) {}
  };
  file &&
    Alert.alert('Send Document', `Send "${urlFileName}" to ${username}?`, [
      {
        text: 'Cancel',
        onPress: () => cancelFIle(),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => handleNewMessage()},
    ]);

  // post new message
  const handleNewMessage = async () => {
    const message = {
      conversationId: data?._id || conId,
      sender: user?._id,
      text: newMessage.trim(),
      fileName: urlFileName,
    };

    if (img) {
      const data = new FormData();
      const fileName = img;
      data.append('name', fileName);
      data.append('file', img);
      message.img = fileName;
      try {
        await axios.post('http://192.168.1.79:8400/api/upload', data);
      } catch (err) {}
    }
    if (file) {
      const data = new FormData();
      const fileName = file;
      data.append('name', fileName);
      data.append('file', file);
      message.file = fileName;
      try {
        await axios.post('http://192.168.1.79:8400/api/upload', data);
      } catch (err) {}
    }

    // send to socket.io
    const receiverId = data?.members.find(member => member === user._id);
    socket.current.emit('sendMessage', {
      senderId: user?._id,
      receiverId,
      text: newMessage.trim(),
      fileName: urlFileName,
      img: message.img,
    });

    try {
      if (newMessage && newMessage.trim()) {
        const res = await userRequest.post(`https://papi.innotech.monster/api/messages`, message);
        setMessages(prev => [...prev, res.data]);
        setNewMessage('');
        setImg('');
        getmessages();
      }
      if (img) {
        const res = await userRequest.post(`https://papi.innotech.monster/api/messages`, message);
        setMessages(prev => [...prev, res.data]);
        setNewMessage('');
        setImg('');
        getmessages();
      }
      if (file) {
        const res = await userRequest.post(`https://papi.innotech.monster/api/messages`, message);
        setMessages(prev => [...prev, res.data]);
        setNewMessage('');
        setFile('');
        getmessages();
        console.log(res.data);
      }
    } catch (error) {}
  };

  // scroll to end
  useEffect(() => {
    const timeout = setTimeout(() => {
      scrollRef.current?.scrollToEnd({animated: true});
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [messages]);

  const cancelImg = () => {
    setImg('');
  };
  const cancelFIle = () => {
    setFile('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <FlatList
          data={messages}
          renderItem={({item}) => <MessengerList data={item} />}
          keyExtractor={item => item?._id}
          showsVerticalScrollIndicator={false}
          ref={scrollRef}
          // inverted
          style={img && {height: 0, opacity: 0}}
        />

        {
          <ScrollView style={img && {opacity: 1}}>
            <View style={img && styles.imgContainer}>
              <Image
                source={img && {uri: img}}
                resizeMode="contain"
                style={styles.img}
              />
              <BorderlessButton onPress={cancelImg} style={styles.cancelIcon}>
                <View accessible accessibilityRole="button">
                  <Icon name="cancel" size={30} color={COLORS.gray} />
                </View>
              </BorderlessButton>
            </View>
          </ScrollView>
        }

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message"
            placeholderTextColor={COLORS.white}
            multiline
            onChangeText={handleTextChange}
            value={newMessage}
          />
          <BorderlessButton onPress={openPdfLibrary}>
            <View accessible accessibilityRole="button">
              <Icon name="attach-file" size={20} color={COLORS.white} />
            </View>
          </BorderlessButton>
          <BorderlessButton onPress={openLibrary}>
            <View accessible accessibilityRole="button">
              <Icon name="photo-camera" size={20} color={COLORS.white} />
            </View>
          </BorderlessButton>
          <BorderlessButton onPress={handleNewMessage} style={styles.icon}>
            <View accessible accessibilityRole="button">
              <Icon name="send" size={28} color={COLORS.white} />
            </View>
          </BorderlessButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {padding: 10, flex: 1, alignItems: 'center'},
  messageSender: {
    backgroundColor: COLORS.secondary,
    maxWidth: 300,
    marginLeft: 60,
    borderRadius: SIZES.font,
    padding: 10,
    marginBottom: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
  },
  messageReceiver: {
    backgroundColor: COLORS.primary,
    maxWidth: 300,
    borderRadius: SIZES.font,
    padding: 10,
    marginBottom: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
  },
  message: {
    color: COLORS.white,
    fontFamily: 'RobotoSlab-Regular',
    marginBottom: 20,
  },
  time: {
    color: 'white',
    fontFamily: 'RobotoSlab-Regular',
    marginTop: 20,
    fontSize: SIZES.small,
    position: 'absolute',
    right: 10,
    bottom: 0,
  },
  mainContainer: {},
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
  imgContainer: {
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 1.3,
    position: 'relative',
  },
  img: {width: '100%', height: '100%'},
  cancelIcon: {position: 'absolute', right: 10, top: 10},
  fileContainer: {
    backgroundColor: '#F34646',
    height: Dimensions.get('window').height * 0.1,
    alignItems: 'center',
  },
  fileName: {color: COLORS.white, fontFamily: 'RobotoSlab-Medium'},
  leftAction: {alignItems: 'center', justifyContent: 'center'},
  actionText: {
    backgroundColor: 'red',
    fontFamily: 'RobotoSlab-Medium',
    padding: 15,
    color: COLORS.white,
  },
});

export default Messenger;
