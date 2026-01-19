import { Tabs } from 'expo-router';
import BottomTabBar from '../../src/ui/BottomTabBar';

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomTabBar {...props} />}
    >
      <Tabs.Screen name="notes" />
      <Tabs.Screen name="labs" />
      <Tabs.Screen name="learn" />
      <Tabs.Screen name="quiz" />
    </Tabs>
  );
}
