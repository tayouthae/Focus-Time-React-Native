import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
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
        <>
          <Timer subject={subject} textStyles={styles.text} />
          <RoundedButton
            size={50}
            title="-"
            textStyle={styles.button}
            onPress={() => {
              setSubject(null);
            }}
          />
        </>
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
