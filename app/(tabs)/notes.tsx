import React, { useState, useCallback } from 'react';
import { View, StyleSheet, FlatList, Pressable } from 'react-native';
import { Link, useFocusEffect } from 'expo-router';
import { AppHeader, Card, Chip } from '@/src/ui';
import { NOTES } from '@/src/data/notes.seed';
import { Note } from '@/src/data/types';
import { getBookmarkedNotes, toggleBookmark } from '@/src/storage/bookmarks';
import { theme } from '@/src/theme';

const CATEGORIES = ['All', 'Fundamentals', 'Classification', 'Stresses'];

export default function NotesScreen() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [, forceUpdate] = useState({}); // To force re-render on bookmark

  const loadBookmarks = async () => {
    const ids = await getBookmarkedNotes();
    setBookmarkedIds(ids);
  };

  useFocusEffect(
    useCallback(() => {
      loadBookmarks();
    }, [])
  );

  const handleToggleBookmark = async (noteId: string) => {
    await toggleBookmark(noteId);
    // After toggling, reload bookmarks to update the UI state
    await loadBookmarks();
    forceUpdate({}); // Force a re-render to show bookmark state change immediately
  };

  const filteredNotes = activeCategory === 'All'
    ? NOTES
    : NOTES.filter((note) => note.category === activeCategory);

  const renderItem = ({ item }: { item: Note }) => (
    <Link href={{ pathname: '/notes/detail', params: { id: item.id } }} asChild>
      <Pressable>
        <Card
          title={item.title}
          subtitle={item.category}
          isBookmarked={bookmarkedIds.includes(item.id)}
          onBookmarkPress={() => handleToggleBookmark(item.id)}
        />
      </Pressable>
    </Link>
  );

  return (
    <View style={styles.container}>
      <AppHeader title="Notes" />
      <View style={styles.filtersContainer}>
        <FlatList
          data={CATEGORIES}
          renderItem={({ item }) => (
            <Chip
              label={item}
              isActive={item === activeCategory}
              onPress={() => setActiveCategory(item)}
            />
          )}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersContent}
        />
      </View>
      <FlatList
        data={filteredNotes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        extraData={bookmarkedIds} // Ensure FlatList re-renders when bookmarks change
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  filtersContainer: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  filtersContent: {
    paddingHorizontal: 16,
    gap: 8,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  separator: {
    height: 16,
  },
});
