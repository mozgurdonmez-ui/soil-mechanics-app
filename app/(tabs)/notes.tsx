import { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { colors, spacing, typography } from '../../src/theme/tokens';
import { notes } from '../../src/data/seed';
import Card from '../../src/ui/Card';
import Chip from '../../src/ui/Chip';
import Button from '../../src/ui/Button';
import AppHeader from '../../src/ui/AppHeader';

const TOPICS = ['All', 'Phase Relationships', 'Soil Classification', 'Effective Stress'];

export default function NotesScreen() {
  const router = useRouter();
  const [activeTopic, setActiveTopic] = useState(TOPICS[0]);

  const filteredNotes = activeTopic === 'All'
    ? notes
    : notes.filter(note => note.topic === activeTopic);

  return (
    <View style={styles.container}>
      <AppHeader title="Notes" />
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.chipsContainer}>
            <FlatList
              data={TOPICS}
              renderItem={({ item }) => (
                <Chip
                  label={item}
                  isActive={item === activeTopic}
                  onPress={() => setActiveTopic(item)}
                />
              )}
              keyExtractor={item => item}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.chipsList}
            />
          </View>

          <Card style={styles.continueCard}>
            <Text style={styles.continueTitle}>Continue where you left off</Text>
            <Text style={styles.continueBody}>Intro to Soil Composition</Text>
            <Button title="Continue" onPress={() => router.push('/notes/detail')} />
          </Card>

          <Text style={styles.sectionTitle}>All Notes</Text>
          {filteredNotes.map(note => (
            <TouchableOpacity key={note.id} onPress={() => router.push('/notes/detail')}>
              <Card style={styles.noteCard}>
                <Text style={styles.noteTitle}>{note.title}</Text>
                <Text style={styles.noteTopic}>{note.topic}</Text>
              </Card>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    padding: spacing.md,
  },
  chipsContainer: {
    marginBottom: spacing.lg,
  },
  chipsList: {
    gap: spacing.sm,
  },
  continueCard: {
    marginBottom: spacing.xl,
  },
  continueTitle: {
    ...typography.h2,
    marginBottom: spacing.xs,
  },
  continueBody: {
    ...typography.body,
    marginBottom: spacing.md,
  },
  sectionTitle: {
    ...typography.h2,
    marginBottom: spacing.md,
  },
  noteCard: {
    marginBottom: spacing.md,
  },
  noteTitle: {
    ...typography.body,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  noteTopic: {
    ...typography.caption,
    color: colors.text, // A secondary color would be better here
  },
});
