import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../../theme/tokens';

interface ChipProps {
  label: string;
  onPress: () => void;
  isActive?: boolean;
}

export default function Chip({ label, onPress, isActive = false }: ChipProps) {
  return (
    <TouchableOpacity
      style={[styles.container, isActive ? styles.activeContainer : {}]}
      onPress={onPress}
    >
      <Text style={[styles.text, isActive ? styles.activeText : {}]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.radius.full,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.card,
  },
  activeContainer: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  text: {
    ...theme.typography.caption,
    fontWeight: '600',
    color: theme.colors.text,
  },
  activeText: {
    color: '#FFFFFF',
  },
});
