 feature/quiz-screen-1670358114941045606
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { theme } from '../theme/tokens';

const ICONS: Record<string, keyof typeof Feather.glyphMap> = {
  notes: 'book-open',
  labs: 'activity',
  learn: 'layers',
  quiz: 'help-circle',
};

const LABELS: Record<string, string> = {
  notes: 'Notes',
  labs: 'Labs',
  learn: 'Learn',
  quiz: 'Quiz',
};

const BottomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, 10) }]}>
      <View style={styles.dock}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const options = descriptors[route.key]?.options ?? {};

          const label =
            (options.tabBarLabel as string) ??
            (options.title as string) ??
            LABELS[route.name] ??
            route.name;

          const iconName = ICONS[route.name] ?? 'circle';

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name as never);
            }
          };

          const onLongPress = () => {
            navigation.emit({ type: 'tabLongPress', target: route.key });
          };

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              onLongPress={onLongPress}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              style={styles.tab}
              hitSlop={10}
            >
              <View style={[styles.iconPill, isFocused && styles.iconPillActive]}>
                <Feather
                  name={iconName}
                  size={20}
                  color={isFocused ? theme.colors.primary : theme.colors.textSecondary}
                />
              </View>

              <Text style={[styles.label, isFocused && styles.labelActive]} numberOfLines={1}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingHorizontal: theme.spacing.lg,
    paddingTop: 10,
  },
  dock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.full,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    ...theme.elevation.shadow3,

import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter, useSegments } from 'expo-router';
import { colors, spacing, radii } from '../theme/tokens';

const TABS = [
  { name: 'Notes', path: '/notes' },
  { name: 'Labs', path: '/labs' },
  { name: 'Learn', path: '/learn' },
  { name: 'Quiz', path: '/quiz' },
];

export default function BottomTabBar() {
  const router = useRouter();
  const segments = useSegments();
  const activeTab = `/${segments[0] || ''}`;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {TABS.map(tab => {
          const isActive = activeTab === tab.path;
          return (
            <TouchableOpacity
              key={tab.name}
              style={styles.tab}
              onPress={() => router.replace(tab.path)}
            >
              <Text style={[styles.tabText, isActive && styles.activeTabText]}>
                {tab.name}
              </Text>
              {isActive && <View style={styles.activeIndicator} />}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  container: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
 main
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
 feature/quiz-screen-1670358114941045606
    minHeight: 44,
  },
  iconPill: {
    width: 40,
    height: 30,
    borderRadius: theme.radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconPillActive: {
    backgroundColor: theme.colors.secondary,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    ...theme.elevation.shadow2,
  },
  label: {
    marginTop: 4,
    fontSize: theme.typography.caption.fontSize,
    fontWeight: '600',
    color: theme.colors.textSecondary,
  },
  labelActive: {
    color: theme.colors.primary,
  },
});

export default BottomTabBar;

    paddingVertical: spacing.sm,
  },
  tabText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '500',
  },
  activeTabText: {
    color: colors.primary,
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    height: 2,
    width: '50%',
    backgroundColor: colors.primary,
    borderRadius: radii.sm,
  },
});
main
