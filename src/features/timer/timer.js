import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Timer = ({ subject }) => {
  return (
    <View style={styles.container}>
      <Text>Timer goes here: {subject}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
