import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../../constants/styles';
import {COLORS} from '../../../constants';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';
import {TextInput} from 'react-native-paper';
import {SavedData} from './EditStudent';

const EditContactInfo = () => {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleAdd = () => {
    setIsLoading(true);
    let timeout = setTimeout(() => {
      setIsEdit(true);
      setIsLoading(false);
      timeout = setTimeout(() => {
        setIsEdit(false);
      }, 1000);
    }, 1000);
    return () => clearTimeout(timeout);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {isEdit && <SavedData />}

      <ScrollView style={styles.ScrollView}>
        <View style={styles.editContainer}>
          <ScrollView>
            <MotiView
              from={{right: -150, opacity: 0.5}}
              animate={{right: 0, opacity: 1}}
              transition={{
                type: 'timing',
                duration: 2000,
                easing: Easing.out(Easing.ease),
              }}
              style={styles.editView}>
              {/* conatct information */}
              <View>
                <Text style={styles.editLabel}>Contact Information</Text>
                <TextInput
                  style={styles.editInput}
                  label="Phone Number"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  keyboardType="phone-pad"
                />
                <TextInput
                  style={styles.editInput}
                  label="Email"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  keyboardType="email-address"
                />
                <TextInput
                  style={styles.editInput}
                  label="Emergency Number 1"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  keyboardType="phone-pad"
                />
                <TextInput
                  style={styles.editInput}
                  label="Emergency Number 2"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  keyboardType="phone-pad"
                />
                <TextInput
                  style={styles.editInput}
                  label="Present Address"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  multiline
                />
                <TextInput
                  style={styles.editInput}
                  label="Permanent Address"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  multiline
                />
              </View>

              <View style={styles.flexBtn}>
                {isLoading ? (
                  <RectButton style={styles.indicator}>
                    <ActivityIndicator size="large" color={COLORS.secondary} />
                  </RectButton>
                ) : (
                  <RectButton onPress={handleAdd} style={styles.editButton}>
                    <Text style={styles.buttonText}>Save</Text>
                  </RectButton>
                )}
                <RectButton
                  onPress={() => navigation.goBack()}
                  style={styles.editButtonE}>
                  <Text style={styles.buttonText}>Exit</Text>
                </RectButton>
              </View>
            </MotiView>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditContactInfo;
