import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { fontSizes, spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

const minutesToMilis = (min) => min * 1000 * 60;

const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const CountDown = ({
  minutes = 0.1,
  isPaused,
  onProgress,
  style = {},
}) => {
  const interval = React.useRef(null);

  const countdown = () => {
    setMillis((time) => {
      if (time === 0) {
        return time;
      }
      const timeLeft = time - 1000;

      onProgress(timeLeft / minutesToMilis(minutes));
      return timeLeft;
    });
  };

  useEffect(() => {
    setMillis(minutesToMilis(minutes));
  }, [minutes]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countdown, 1000);
  }, [isPaused]);

  const [millis, setMillis] = useState(minutesToMilis(minutes));

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const second = Math.floor(millis / 1000) % 60;
  return (
    <View style={[style]}>
      <Text style={styles.text}>
        {formatTime(minute)} : {formatTime(second)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxl,
    fontWeight: "bold",
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: "rgba(94,132,236,0.3)",
  },
});
