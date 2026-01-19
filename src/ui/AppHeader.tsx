import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { colors, spacing, typography } from '../theme/tokens';
import { Ionicons } from '@expo/vector-icons';

interface AppHeaderProps {
  title: string;
  showBackButton?: boolean;
  rightAction?: {
    icon: React.ComponentProps<typeof Ionicons>['name'];
    onPress: () => void;
  };
}

export default function AppHeader({ title, showBackButton = false, rightAction }: AppHeaderProps) {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.left}>
          {showBackButton && (
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Ionicons name="chevron-back" size={24} color={colors.primary} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.center}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.right}>
          {rightAction && (
            <TouchableOpacity onPress={rightAction.onPress}>
              <Ionicons name={rightAction.icon} size={24} color={colors.primary} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
  },
  container: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  left: {
    width: 40,
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  right: {
    width: 40,
    alignItems: 'flex-end',
  },
  title: {
    ...typography.h2,
    fontSize: 18,
    color: colors.text,
  },
  backButton: {
    padding: spacing.xs,
  },
});
