import React, { useState } from "react";
import { View, StyleSheet, Text, Vibration } from "react-native";
import { colors } from "../../utils/colors";
import { spacing } from "../../utils/sizes";
import { CountDown } from "../../components/CountDown";
import { RoundedButton } from "../../components/RoundedButton";
import { ProgressBar } from "react-native-paper";
import { Timing } from "./Timing";
import { useKeepAwake } from "expo-keep-awake";

const DEFAULT_TIME = 0.1;

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({
  subject,
  onTimerEnd,
  clearSubject,
  textStyles = {},
}) => {
  useKeepAwake();
  const [minutes, setMinutes] = useState(DEFAULT_TIME);
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

  const onEnd = () => {
    Vibration.vibrate(PATTERN);
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };

  return (
    <View style={styles.container}>
      <CountDown
        style={styles.countdown}
        minutes={minutes}
        isPaused={!isStarted}
        onEnd={onEnd}
        onProgress={onProgress}
      />
      <View>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={[styles.task, textStyles]}>{subject}</Text>
      </View>

      <View style={styles.progressBarSpacing}>
        <ProgressBar progress={progress} style={styles.progressBar} />
      </View>

      <View style={styles.timingWrapper}>
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
      <View style={styles.cancelButton}>
        <RoundedButton
          title="-"
          size={50}
          onPress={() => {
            clearSubject();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  countdown: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5,
  },
  timingWrapper: {
    flex: 0.1,
    flexDirection: "row",
    padding: spacing.md,
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: spacing.sm,
    justifyContent: "center",
    alignItems: "center",
  },
  progressBar: {
    height: 10,
    color: colors.progressBar,
  },
  progressBarSpacing: {
    paddingTop: spacing.xl,
    paddingBottom: spacing.xl,
  },
  cancelButton: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
