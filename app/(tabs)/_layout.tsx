import { Tabs } from 'expo-router';
 feature/quiz-screen-1670358114941045606
import React from 'react';
import BottomTabBar from '../../src/ui/BottomTabBar';

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <BottomTabBar {...props} />}>
      <Tabs.Screen
        name="notes"
        options={{
          title: 'Notes',
        }}
      />
      <Tabs.Screen
        name="labs"
        options={{
          title: 'Labs',
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: 'Learn',
        }}
      />
      <Tabs.Screen
        name="quiz"
        options={{
          title: 'Quiz',
        }}
      />

import BottomTabBar from '../../src/ui/BottomTabBar';

export default function AppLayout() {
  return (
    <Tabs tabBar={() => <BottomTabBar />}>
      <Tabs.Screen name="notes" options={{ title: 'Notes' }} />
      <Tabs.Screen name="labs" options={{ title: 'Labs' }} />
      <Tabs.Screen name="learn" options={{ title: 'Learn' }} />
      <Tabs.Screen name="quiz" options={{ title: 'Quiz' }} />
 main
    </Tabs>
  );
}
