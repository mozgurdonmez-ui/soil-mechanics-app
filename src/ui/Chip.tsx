import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, radii, spacing, typography } from '../theme/tokens';

interface ChipProps {
  label: string;
  onPress: () => void;
  isActive?: boolean;
}

export default function Chip({ label, onPress, isActive = false }: ChipProps) {
  const containerStyle = [
    styles.container,
    isActive ? styles.activeContainer : styles.inactiveContainer,
  ];
  const textStyle = [
    styles.text,
    isActive ? styles.activeText : styles.inactiveText,
  ];

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radii.lg,
    borderWidth: 1,
  },
  activeContainer: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  inactiveContainer: {
    backgroundColor: colors.card,
    borderColor: colors.border,
  },
  text: {
    ...typography.caption,
    fontWeight: '600',
  },
  activeText: {
    color: colors.background,
  },
  inactiveText: {
    color: colors.text,
  },
});
