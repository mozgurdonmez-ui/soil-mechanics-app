import React from 'react';
import { View, Text, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { theme } from '../theme/tokens';

interface AppHeaderProps {
  title: string;
  showBackButton?: boolean;
  rightAction?: {
    icon: keyof typeof Feather.glyphMap;
    onPress: () => void;
  };
}

export default function AppHeader({ title, showBackButton = false, rightAction }: AppHeaderProps) {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.side}>
          {showBackButton && (
            <Pressable onPress={() => router.back()} hitSlop={20}>
              <Feather name="chevron-left" size={24} color={theme.colors.primary} />
            </Pressable>
          )}
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.side}>
          {rightAction && (
            <Pressable onPress={rightAction.onPress} hitSlop={20}>
              <Feather name={rightAction.icon} size={22} color={theme.colors.primary} />
            </Pressable>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: theme.colors.background,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.md,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  side: {
    width: 40,
    alignItems: 'center',
  },
  title: {
    ...theme.typography.h2,
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.text,
  },
});
