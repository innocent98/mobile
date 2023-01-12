import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../../constants/styles';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Logo} from '../../Home';
import {AnimatePresence, MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../../constants';
import {SavedData} from '../students/EditStudent';

const AddSession = ({setAdd, setIsAdd}) => {
  const [isLoading, setIsLoading] = useState(false);

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
          placeholder="Session/Semester"
          placeholderTextColor="#000"
        />

        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <RectButton onPress={handleAdd} style={styles.addButton}>
            <Text style={styles.buttonText}>Add Session</Text>
          </RectButton>
        )}
      </MotiView>
    </AnimatePresence>
  );
};

const AcademicSession = () => {
  const navigation = useNavigation();
  const [add, setAdd] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      {add && <AddSession setAdd={setAdd} setIsAdd={setIsAdd} />}
      <View style={styles.container}>
        {isAdd && <SavedData />}
        <Logo />

        <View style={styles.topActions}>
          <RectButton onPress={() => setAdd(true)} style={styles.addButton}>
            <Text style={styles.buttonText}>+ New Session/Semester</Text>
          </RectButton>
        </View>
        
        <ScrollView>
          <View style={styles.container}>
            <RectButton style={styles.studentProfile}>
              <Text style={styles.studentProfileDetails}>
                2022/2023 Session Fall Semester
              </Text>
            </RectButton>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AcademicSession;
