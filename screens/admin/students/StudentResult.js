import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import {COLORS, result} from '../../../constants';
import {styles} from '../../../constants/styles';
import {SavedData} from './EditStudent';

const EditResult = ({setIsEdit}) => {
  const [isLoading, setIsLoading] = useState(false);

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
    <View style={{marginTop: 50}}>
      <View style={styles.editContainer}>
        <Text style={styles.title}>Input/Edit Candidate's Result</Text>
        {result.map(r => (
          <>
            {!r.sub && (
              <View key={r.id}>
                <Text style={styles.editLabel}>{r.code}</Text>
                <TextInput
                  style={styles.addInput}
                  placeholderTextColor="#000"
                  defaultValue={r.score.toString()}
                />
              </View>
            )}
          </>
        ))}

        {isLoading ? (
          <RectButton style={styles.indicator}>
            <ActivityIndicator size="small" color={COLORS.secondary} />
          </RectButton>
        ) : (
          <RectButton onPress={handleAdd} style={styles.editButton}>
            <Text style={styles.buttonText}>Save</Text>
          </RectButton>
        )}
      </View>
    </View>
  );
};

const StudentResult = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      {isEdit && <SavedData />}

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <View style={styles.resultDetailsContainer}>
              {/* table */}
              <ScrollView horizontal={true}>
                <View style={styles.table}>
                  <View style={styles.tableHead}>
                    <Text style={styles.hd}>Course code (unit)</Text>
                    <Text style={styles.hd}>Score</Text>
                    <Text style={styles.hd}>Grade (credit)</Text>
                    <Text style={styles.hd}>GP</Text>
                  </View>
                  {result.map(r => (
                    <>
                      {!r.sub && (
                        <View style={styles.tableBody} key={r.id}>
                          <Text style={styles.hd}>{r.code}</Text>
                          <Text style={styles.hd}>{r.score}</Text>
                          <Text style={styles.hd}>{r.grade}</Text>
                          <Text style={styles.hd}>{r.gp}</Text>
                        </View>
                      )}
                      {r.sub && (
                        <View style={styles.tableBody} key={r.id}>
                          <Text style={styles.hd}>{r.sub}</Text>
                          <Text style={styles.hd}>{r.total}</Text>
                        </View>
                      )}
                    </>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
          {/* edit result */}
          <EditResult setIsEdit={setIsEdit} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StudentResult;
