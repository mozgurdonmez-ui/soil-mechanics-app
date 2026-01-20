import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { theme } from '../../src/theme/tokens';
import { notes, Note } from '../../src/data/notes.seed';
import { getBookmarkedNoteIds, toggleBookmark } from '../../src/storage/bookmarks';
import AppHeader from '../../src/ui/AppHeader';

export default function NotesDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [note, setNote] = useState<Note | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const noteId = Array.isArray(id) ? id[0] : id;
    const foundNote = notes.find(n => n.id === noteId);

    if (foundNote) {
      setNote(foundNote);
      // Load initial bookmark state
      getBookmarkedNoteIds().then(bookmarks => {
        setIsBookmarked(bookmarks.has(foundNote.id));
      });
    } else {
      // Handle note not found, maybe redirect
      router.back();
    }
  }, [id]);

  const handleToggleBookmark = async () => {
    if (note) {
      await toggleBookmark(note.id);
      setIsBookmarked(prev => !prev);
    }
  };

  if (!note) {
    return <View style={styles.container} />; // Or a loading indicator
  }

  return (
    <View style={styles.container}>
      <AppHeader
        title={note.topic}
        showBackButton
        rightAction={{
          icon: isBookmarked ? 'bookmark' : 'bookmark',
          onPress: handleToggleBookmark,
        }}
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.content}>{note.content}</Text>
      </ScrollView>

      {/* Sticky CTA Placeholder */}
      <View style={styles.stickyCTA}>
        <Text style={styles.ctaText}>Quick Practice</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    padding: theme.spacing.md,
    paddingBottom: 100, // To avoid overlap with sticky CTA
  },
  title: {
    ...theme.typography.h1,
    marginBottom: theme.spacing.md,
  },
  content: {
    ...theme.typography.body,
    fontSize: 18,
    lineHeight: 28,
  },
  stickyCTA: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.card,
    borderTopWidth: 1,
    borderColor: theme.colors.border,
    alignItems: 'center',
  },
  ctaText: {
    ...theme.typography.body,
    fontWeight: 'bold',
    color: theme.colors.textSecondary,
  },
});
