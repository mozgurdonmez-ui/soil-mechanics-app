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
