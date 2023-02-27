import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Logo} from './Home';
import {SelectList} from 'react-native-dropdown-select-list';
import {COLORS} from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './../constants/styles';
import {AnimatePresence, MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
import {RectButton} from 'react-native-gesture-handler';
import {SavedData} from './admin/students/EditStudent';
import DocumentPicker from 'react-native-document-picker';

const AddLibrary = ({setAdd, setIsAdd}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState('');
  const [urlFileName, setUrlFileName] = useState('');

  const openPdfLibrary = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setFile(res[0].uri);
      setUrlFileName(res[0].name);
    } catch (error) {}
  };

  const handleAdd = () => {
    setIsLoading(true);
    let timeout = setTimeout(() => {
      setIsAdd(true);
      setIsLoading(false);
      setAdd(false);
      timeout = setTimeout(() => {
        setIsAdd(false);
      }, 1000);
    }, 1000);
    return () => clearTimeout(timeout);
  };

  return (
    <AnimatePresence>
      <MotiView
        from={{bottom: -50, opacity: 0.5}}
        animate={{bottom: 0, opacity: 1}}
        exit={{bottom: 0, opacity: 0.5}}
        transition={{
          type: 'timing',
          duration: 500,
          easing: Easing.out(Easing.ease),
        }}
        style={styles.addContainer}>
        <Icon
          name="close"
          size={22}
          color="#000"
          style={styles.closeIcon}
          onPress={() => setAdd(false)}
        />
        <TextInput
          style={styles.addInput}
          placeholder="Book Title"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.addInput}
          placeholder="Book Author"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.addInput}
          placeholder="Upload Book"
          placeholderTextColor="#000"
          value={urlFileName}
          onPressIn={openPdfLibrary}
        />

        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <RectButton onPress={handleAdd} style={styles.addButton}>
            <Text style={styles.buttonText}>Add Library</Text>
          </RectButton>
        )}
      </MotiView>
    </AnimatePresence>
  );
};

const ELibrary = () => {
  const [selected, setSelected] = useState([]);
  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  const data = [
    {key: '1', value: 'Mobiles', disabled: true},
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '4', value: 'Computers', disabled: true},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      {add && <AddLibrary setAdd={setAdd} setIsAdd={setIsAdd} />}
      <View style={styles.container}>
        {isAdd && <SavedData />}
        <Logo />

        <View style={styles.topActions}>
          <RectButton onPress={() => setAdd(true)} style={styles.addButton}>
            <Text style={styles.buttonText}>+ New Library</Text>
          </RectButton>
        </View>

        <ScrollView style={styles.ScrollView}>
          <View style={styles.subContainer}>
            <ScrollView>
              <Text style={styles.title}>Library Assets</Text>
              <SelectList
                setSelected={val => setSelected(val)}
                data={data}
                save="value"
                inputStyles={{color: '#000'}}
                dropdownTextStyles={{color: '#000'}}
                fontFamily="RobotoSlab-Regular"
              />
              {/* asset cards */}
              <View style={styles.assetCardContainer}>
                <View style={styles.assetCard}>
                  <Text style={styles.assetCardTitle}>ETHICAL HACKING</Text>
                  <Text style={styles.assetCardAuthor}>
                    Author: Shittu Abiola
                  </Text>
                  <Text style={styles.assetCardDate}>
                    09/11/2022{' '}
                    <Icon name="file-download" size={18} color={COLORS.white} />
                  </Text>
                </View>

                <View style={styles.assetCard}>
                  <Text style={styles.assetCardTitle}>ETHICAL HACKING</Text>
                  <Text style={styles.assetCardAuthor}>
                    Author: Shittu Abiola
                  </Text>
                  <Text style={styles.assetCardDate}>
                    09/11/2022{' '}
                    <Icon name="file-download" size={18} color={COLORS.white} />
                  </Text>
                </View>

                <View style={styles.assetCard}>
                  <Text style={styles.assetCardTitle}>ETHICAL HACKING</Text>
                  <Text style={styles.assetCardAuthor}>
                    Author: Shittu Abiola
                  </Text>
                  <Text style={styles.assetCardDate}>
                    09/11/2022{' '}
                    <Icon name="file-download" size={18} color={COLORS.white} />
                  </Text>
                </View>
                <View style={styles.assetCard}>
                  <Text style={styles.assetCardTitle}>ETHICAL HACKING</Text>
                  <Text style={styles.assetCardAuthor}>
                    Author: Shittu Abiola
                  </Text>
                  <Text style={styles.assetCardDate}>
                    09/11/2022{' '}
                    <Icon name="file-download" size={18} color={COLORS.white} />
                  </Text>
                </View>

                <View style={styles.assetCard}>
                  <Text style={styles.assetCardTitle}>ETHICAL HACKING</Text>
                  <Text style={styles.assetCardAuthor}>
                    Author: Shittu Abiola
                  </Text>
                  <Text style={styles.assetCardDate}>
                    09/11/2022{' '}
                    <Icon name="file-download" size={18} color={COLORS.white} />
                  </Text>
                </View>

                <View style={styles.assetCard}>
                  <Text style={styles.assetCardTitle}>ETHICAL HACKING</Text>
                  <Text style={styles.assetCardAuthor}>
                    Author: Shittu Abiola
                  </Text>
                  <Text style={styles.assetCardDate}>
                    09/11/2022{' '}
                    <Icon name="file-download" size={18} color={COLORS.white} />
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ELibrary;
