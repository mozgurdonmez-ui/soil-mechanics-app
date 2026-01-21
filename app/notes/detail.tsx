import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { NOTES } from '@/src/data/notes.seed';
import { Note } from '@/src/data/types';
import { isNoteBookmarked, toggleBookmark } from '@/src/storage/bookmarks';
import { theme } from '@/src/theme';
import { Button } from '@/src/ui';

export default function NoteDetailScreen() {
  const { id } = useLocalSearchParams();
  const note = useMemo(() => NOTES.find((n) => n.id === id), [id]);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (note) {
      isNoteBookmarked(note.id).then(setIsBookmarked);
    }
  }, [note]);

  const handleToggleBookmark = async () => {
    if (note) {
      const newBookmarkStatus = await toggleBookmark(note.id);
      setIsBookmarked(newBookmarkStatus);
    }
  };

  if (!note) {
    return (
      <View style={styles.container}>
        <Text>Note not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: note.title,
          headerBackTitle: 'Notes',
          headerRight: () => (
            <Pressable onPress={handleToggleBookmark}>
              <Ionicons
                name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
                size={24}
                color={isBookmarked ? theme.colors.accent : theme.colors.textSecondary}
              />
            </Pressable>
          ),
        }}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentContainer}>
          <Text style={styles.category}>{note.category}</Text>
          <Text style={styles.title}>{note.title}</Text>
          <View style={styles.separator} />
          <Text style={styles.body}>{note.content}</Text>
        </View>
      </ScrollView>
      <View style={styles.ctaContainer}>
        <Button label="Quick Practice" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 24,
  },
  category: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 16,
  },
  separator: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: 16,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: theme.colors.textSecondary,
  },
  ctaContainer: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    backgroundColor: theme.colors.background,
  },
});
