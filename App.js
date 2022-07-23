import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Focus } from "./src/features/focus/focus";
import { FocusHistory } from "./src/features/focus/FocusHistory";
import { Timer } from "./src/features/timer/timer";
import { RoundedButton } from "./src/components/RoundedButton";
import { colors } from "./src/utils/colors";

const STATUSES = {
  COMPLETE: 1,
  CANCELLED: 0,
};

export default function App() {
  const [subject, setSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const addFocusHistorySubjectWithState = (subject, status) => {
    setFocusHistory([...focusHistory, { subject, status }]);
  };

  const onClear = () => {
    setFocusHistory([]);
  };

  return (
    <View style={styles.container}>
      {subject ? (
        <Timer
          subject={subject}
          onTimerEnd={() => {
            addFocusHistorySubjectWithState(subject, STATUSES.COMPLETE);
            setSubject(null);
          }}
          clearSubject={() => {
            addFocusHistorySubjectWithState(subject, STATUSES.CANCELLED);
            setSubject(null);
          }}
          textStyles={styles.text}
        />
      ) : (
        <>
          <Focus addSubject={setSubject} />
          <FocusHistory focusHistory={focusHistory} onClear={onClear} />
        </>
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
