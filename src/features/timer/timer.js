import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../../utils/colors";
import { spacing } from "../../utils/sizes";
import { CountDown } from "../../components/CountDown";
import { RoundedButton } from "../../components/RoundedButton";
import { ProgressBar } from "react-native-paper";
import { Timing } from "./Timing";

export const Timer = ({ subject, textStyles = {} }) => {
  const [minutes, setMinutes] = useState(0.1);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  return (
    <View style={styles.container}>
      <CountDown
        style={styles.centerAlign}
        minutes={minutes}
        isPaused={!isStarted}
        onProgress={onProgress}
      />
      <View style={styles.wrapper}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={[styles.task, textStyles]}>{subject}</Text>
      </View>

      <View style={styles.progressBarSpacing}>
        <ProgressBar progress={progress} style={styles.progressBar} />
      </View>

      <View style={(styles.buttonWrapper, styles.rowFlexDirection)}>
        <Timing onChangeTime={changeTime} />
      </View>

      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton
            title="Pause"
            onPress={() => {
              setIsStarted(false);
            }}
          />
        ) : (
          <RoundedButton
            title="Start"
            onPress={() => {
              setIsStarted(!isStarted);
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    paddingTop: spacing.xxl,
  },
  title: {
    textAlign: "center",
    color: colors.white,
  },
  task: {
    textAlign: "center",
    fontWeight: "bold",
    color: colors.white,
  },
  centerAlign: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5,
  },
  buttonWrapper: {
    flex: 0.3,
    padding: spacing.md,
    justifyContent: "ceter",
    alignItems: "center",
  },
  rowFlexDirection: {
    flexDirection: "row",
    paddingTop: spacing.md,
  },
  progressBar: {
    height: 10,
  },
  progressBarSpacing: {
    paddingTop: spacing.xxl,
  },
});
