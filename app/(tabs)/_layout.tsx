import { Tabs } from 'expo-router';
import BottomTabBar from '../../src/ui/BottomTabBar';

export default function AppLayout() {
  return (
    <Tabs tabBar={() => <BottomTabBar />}>
      <Tabs.Screen name="notes" options={{ title: 'Notes' }} />
      <Tabs.Screen name="labs" options={{ title: 'Labs' }} />
      <Tabs.Screen name="learn" options={{ title: 'Learn' }} />
      <Tabs.Screen name="quiz" options={{ title: 'Quiz' }} />
    </Tabs>
  );
}
