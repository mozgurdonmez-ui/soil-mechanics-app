import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { theme } from '../theme/tokens';

type ButtonProps = {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
};

const Button = ({ title, onPress, variant = 'primary', disabled = false }: ButtonProps) => {
  const buttonStyle: ViewStyle[] = [
    styles.button,
    styles[`${variant}Button`],
  ];
  const textStyle: TextStyle[] = [
    styles.text,
    styles[`${variant}Text`],
  ];

  if (disabled) {
    buttonStyle.push(styles.disabledButton);
    textStyle.push(styles.disabledText);
  }

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={buttonStyle}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
  },
  secondaryButton: {
    backgroundColor: theme.colors.secondary,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  disabledButton: {
    backgroundColor: '#A9A9A9', // A generic disabled color
    borderColor: '#A9A9A9',
  },
  text: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: '600',
  },
  primaryText: {
    color: theme.colors.background,
  },
  secondaryText: {
    color: theme.colors.primary,
  },
  disabledText: {
    color: '#E0E0E0',
  },
});

export default Button;
