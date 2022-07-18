import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Focus } from './src/features/focus/focus';
import { RoundedButton } from './src/components/RoundedButton';
import {colors} from './src/utils/colors';

export default function App() {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      {subject ? (
        <View style={styles.viewSubject}>
          <Text style={styles.text}> {subject}</Text>
          <RoundedButton
            size={50}
            title="-"
            textStyle={styles.button}
            onPress={() => {
              setSubject(null);
            }}
          />
        </View>
      ) : (
        <Focus addSubject={setSubject} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    paddingTop: Constants.statusBarHeight,
  },
  viewSubject: {
    flexDirection: 'column',
  },
  button: {
    size: 100,
    color: colors.white,
  },
});
