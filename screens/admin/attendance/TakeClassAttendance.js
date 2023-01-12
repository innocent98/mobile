import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import {student} from '../../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from '../../../constants/styles';

const WeekBody = ({week}) => {
  const handleIsPresent = () => {};
  const handleIsAbsent = () => {};

  return (
    <View style={styles.hdb}>
      <Icon
        style={styles.attendanceBtn}
        name="done"
        size={16}
        color={week.isPresent ? 'teal' : '#000'}
      />
      <Icon
        style={styles.attendanceBtn}
        name="close"
        size={16}
        color={week.isPresent === false ? 'red' : '#000'}
      />
    </View>
  );
};

const Attendance = ({data, week}) => {
  return (
    <View style={styles.tableBody} key={data.id}>
      <Text style={styles.hd}>{data.name}</Text>
      <Text style={styles.hd}>{data.code}</Text>
      <WeekBody week={week} />
    </View>
  );
};

const TakeClassAttendance = ({route}) => {
  const {week} = route.params;
  const renderItem = ({item}) => <Attendance data={item} week={week} />;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topActions}>
          <View style={styles.subTopAction}>
            <TextInput
              placeholder="Search student with matric no..."
              style={styles.staffInput}
            />
          </View>
        </View>

        {/* table */}
        <ScrollView>
          <View style={styles.subContainer}>
            <Text style={styles.title}>
              Tap icon to take student attendance
            </Text>
            <ScrollView horizontal={true}>
              <FlatList
                data={student}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListHeaderComponent={() => (
                  <View style={styles.tableHead}>
                    <Text style={styles.hd}>Student Name</Text>
                    <Text style={styles.hd}>Matric No</Text>
                    <Text style={styles.hd}>{week.week}</Text>
                  </View>
                )}
              />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TakeClassAttendance;
