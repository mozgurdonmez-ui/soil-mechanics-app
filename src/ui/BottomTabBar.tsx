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
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
