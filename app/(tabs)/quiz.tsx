import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const QuizScreen = () => {
  return (
<View style={{ flex: 1, padding: 20, backgroundColor: '#f0f4f8' }}>
  <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 10 }}>Daily Quiz</Text>
  <Text style={{ fontSize: 16, color: '#666', marginBottom: 20 }}>Boost your knowledge and climb the leaderboard!</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
        <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', flex: 1, margin: 5 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>15</Text>
          <Text style={{ color: '#666' }}>day streak</Text>
        </View>
        <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', flex: 1, margin: 5 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Top 8%</Text>
          <Text style={{ color: '#666' }}>Rank</Text>
        </View>
        <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', flex: 1, margin: 5 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>1,200</Text>
          <Text style={{ color: '#666' }}>XP</Text>
        </View>
      </View>
      <TouchableOpacity style={{ backgroundColor: '#1E90FF', padding: 20, borderRadius: 10, alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizScreen;
