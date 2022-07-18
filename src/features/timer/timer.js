import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';
import { CountDown } from '../../components/CountDown';

export const Timer = ({ subject, textStyles = {} }) => {
  return (
    <View style={styles.container}>
      <CountDown style={styles.centerAlign} />
      <View style={styles.wrapper}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={[styles.task, textStyles]}>{subject}</Text>
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
    textAlign: 'center',
    color: colors.white,
  },
  task: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.white,
  },
  centerAlign: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
  },
});
