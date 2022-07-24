import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../../components/RoundedButton";
import { fontSizes, spacing } from "../../utils/sizes";
import { colors } from "../../utils/colors";

export const Focus = ({ addSubject }) => {
  const [temp, setTemp] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Do you want to focus on something?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            label="What would you like to focus on?"
            onChangeText={setTemp}
          />
          <RoundedButton
            size={50}
            title="+"
            onPress={() => {
              addSubject(temp);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "center",
  },
  innerContainer: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: "center",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    paddingTop: spacing.md,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    marginRight: spacing.md,
    flex: 1,
  },
});
