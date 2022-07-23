import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, AsyncStorage } from "react-native";
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

  const addFocusHistorySubjectWithStatus = (subject, status) => {
    setFocusHistory([
      ...focusHistory,
      { key: String(focusHistory.length + 1), subject, status },
    ]);
  };

  const onClear = () => {
    setFocusHistory([]);
  };

  const saveFocusHistory = async () => {
    try {
      await AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory));
    } catch (e) {
      console.log(e);
    }
  };

  const loadFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem("focusHistory");

      if (history && JSON.parse(history).lenght) {
        setFocusHistory(JSON.parse(history));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadFocusHistory();
  }, []);

  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory]);

  return (
    <View style={styles.container}>
      {subject ? (
        <Timer
          subject={subject}
          onTimerEnd={() => {
            addFocusHistorySubjectWithStatus(subject, STATUSES.COMPLETE);
            setSubject(null);
          }}
          clearSubject={() => {
            addFocusHistorySubjectWithStatus(subject, STATUSES.CANCELLED);
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
