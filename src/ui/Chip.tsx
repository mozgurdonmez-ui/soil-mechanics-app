import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../theme/tokens';

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
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.radius.full,
    borderWidth: 1,
  },
  activeContainer: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  inactiveContainer: {
    backgroundColor: theme.colors.card,
    borderColor: theme.colors.border,
  },
  text: {
    ...theme.typography.caption,
    fontWeight: '600',
  },
  activeText: {
    color: '#FFFFFF',
  },
  inactiveText: {
    color: theme.colors.text,
  },
});
