import React from 'react';
import { View, Text } from 'react-native';

const Chip = ({ label }: { label: string }) => {
  return (
    <View>
      <Text>{label}</Text>
    </View>
  );
};

export default Chip;
