import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { fontSizes, paddingSizes } from "../utils/sizes";
import { colors } from "../utils/colors";

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}
    >
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      borderColor: colors.white,
      borderWidth: 2,
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: size / 3,
      color: colors.white,
    },
  });
