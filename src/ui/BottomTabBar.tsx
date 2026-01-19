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
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
