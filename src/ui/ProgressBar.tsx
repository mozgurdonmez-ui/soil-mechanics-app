import React from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '../theme/tokens';

type Props = {
  progress: number; // 0..1
  height?: number;
};

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

const ProgressBar = ({ progress, height = 8 }: Props) => {
  const p = clamp01(progress);
  return (
    <View style={[styles.track, { height }]}>
      <View style={[styles.fill, { width: `${p * 100}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  track: {
    width: '100%',
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.radius.full,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  fill: {
    height: '100%',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.full,
  },
});

export default ProgressBar;
