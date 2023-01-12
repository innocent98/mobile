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
import {SelectList} from 'react-native-dropdown-select-list';
import {SavedData} from '../students/EditStudent';

const EditTimetble = ({route}) => {
  const {time} = route.params;
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [religion, setReligion] = useState('');

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
                duration: 1000,
                easing: Easing.out(Easing.ease),
              }}
              style={styles.editView}>
              <View>
                <Text style={styles.editLabel}>Edit {time} Timetable</Text>

                <TextInput
                  style={styles.editInput}
                  label="Monday"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  multiline
                />
                <TextInput
                  style={styles.editInput}
                  label="Tuesday"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  multiline
                />
                <TextInput
                  style={styles.editInput}
                  label="Wednesday"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  multiline
                />
                <TextInput
                  style={styles.editInput}
                  label="Thursday"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  multiline
                />
                <TextInput
                  style={styles.editInput}
                  label="Friday"
                  placeholderTextColor="#000"
                  mode="outlined"
                  activeOutlineColor={COLORS.secondary}
                  multiline
                />
                <TextInput
                  style={styles.editInput}
                  label="Saturday"
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

export default EditTimetble;
