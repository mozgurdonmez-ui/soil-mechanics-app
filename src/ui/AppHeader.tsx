feat/phase-0-1-scaffold-8266443009613216044
import React from 'react';
import { View, Text, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { theme } from '../../theme/tokens';

interface AppHeaderProps {
  title: string;
  showBackButton?: boolean;
  rightAction?: {
    icon: keyof typeof Feather.glyphMap;
    onPress: () => void;
    color?: string;
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
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <View style={styles.side}>
          {rightAction && (
            <Pressable onPress={rightAction.onPress} hitSlop={20}>
              <Feather name={rightAction.icon} size={22} color={rightAction.color || theme.colors.primary} />
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
    justifyContent: 'center',
  },
  title: {
    ...theme.typography.h2,
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.text,
    textAlign: 'center',
    flex: 1,
  },
});

feature/quiz-screen-1670358114941045606
import React from 'react';
import { View, Text } from 'react-native';

const AppHeader = ({ title }: { title: string }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default AppHeader;

// Placeholder for AppHeader component
export default function AppHeader() {
  return null;
}
main
 main
