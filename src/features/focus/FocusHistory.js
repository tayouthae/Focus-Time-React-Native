import React from "react";
import { View, StyleSheet, FlatList, Text, SafeAreaView } from "react-native";

import { fontSizes, spaces } from "../../utils/sizes";
import { colors } from "../../utils/colors";
import { RoundedButton } from "../../components/RoundedButton";

const HistoryItem = ({ item, index }) => {
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: "center" }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Things we've focused on :</Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: "center" }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? "red" : "green",
    fontSize: fontSizes.md,
  }),
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
  },
});