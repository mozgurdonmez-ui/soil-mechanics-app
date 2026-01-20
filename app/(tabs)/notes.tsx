import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { theme } from '../../src/theme/tokens';
import { notes, Note } from '../../src/data/notes.seed';
import { getBookmarkedNoteIds, toggleBookmark } from '../../src/storage/bookmarks';
import AppHeader from '../../src/ui/AppHeader';
import Card from '../../src/ui/Card';
import Chip from '../../src/ui/Chip';
import { Feather } from '@expo/vector-icons';

const TOPICS = ['All', 'Phase Relationships', 'Soil Classification', 'Effective Stress'];

export default function NotesScreen() {
  const router = useRouter();
  const [activeTopic, setActiveTopic] = useState(TOPICS[0]);
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Load initial bookmarks
    getBookmarkedNoteIds().then(setBookmarkedIds);
  }, []);

  const handleToggleBookmark = async (noteId: string) => {
    const newBookmarkSet = await toggleBookmark(noteId);
    setBookmarkedIds(newBookmarkSet);
  };

  const filteredNotes = activeTopic === 'All'
    ? notes
    : notes.filter(note => note.topic === activeTopic);

  const renderNoteItem = ({ item }: { item: Note }) => {
    const isBookmarked = bookmarkedIds.has(item.id);
    return (
      <Pressable onPress={() => router.push({ pathname: '/notes/detail', params: { id: item.id } })}>
        <Card style={styles.noteCard}>
          <View style={styles.noteHeader}>
            <Text style={styles.noteTitle}>{item.title}</Text>
            <Pressable onPress={() => handleToggleBookmark(item.id)} hitSlop={20}>
              <Feather
                name={isBookmarked ? 'bookmark' : 'bookmark'}
                size={20}
                color={isBookmarked ? theme.colors.primary : theme.colors.border}
              />
            </Pressable>
          </View>
          <Text style={styles.noteInfo}>{item.topic} • {item.readingTime} min read</Text>
        </Card>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <AppHeader title="Notes" />
      <FlatList
        data={filteredNotes}
        renderItem={renderNoteItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View>
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
            <Text style={styles.sectionTitle}>All Notes</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  listContent: {
    padding: theme.spacing.md,
  },
  chipsContainer: {
    marginBottom: theme.spacing.lg,
  },
  chipsList: {
    gap: theme.spacing.sm,
  },
  sectionTitle: {
    ...theme.typography.h2,
    fontSize: 20,
    marginBottom: theme.spacing.md,
  },
  noteCard: {
    marginBottom: theme.spacing.md,
  },
  noteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  noteTitle: {
    ...theme.typography.body,
    fontWeight: '600',
    flex: 1,
  },
  noteInfo: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
  },
});
