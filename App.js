import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Focus } from "./src/features/focus/focus";
import { Timer } from "./src/features/timer/timer";
import { RoundedButton } from "./src/components/RoundedButton";
import { colors } from "./src/utils/colors";

export default function App() {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      {subject ? (
        <Timer
          subject={subject}
          onTimerEnd={() => {
            setSubject(null);
          }}
          textStyles={styles.text}
        />
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
    paddingTop: Constants.statusBarHeight,
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
  },
  button: {
    size: 100,
    color: colors.white,
  },
});
