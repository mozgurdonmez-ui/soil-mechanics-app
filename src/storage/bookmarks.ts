import AsyncStorage from '@react-native-async-storage/async-storage';
import { BOOKMARKS_NOTES } from './keys';

// Helper to get bookmarks from storage, returns an empty Set if none exist or error occurs
const getBookmarksSet = async (): Promise<Set<string>> => {
  try {
    const jsonValue = await AsyncStorage.getItem(BOOKMARKS_NOTES);
    if (jsonValue !== null) {
      const items = JSON.parse(jsonValue);
      return new Set(items);
    }
  } catch (e) {
    console.error('Failed to load bookmarked notes.', e);
  }
  return new Set();
};

/**
 * Retrieves the set of bookmarked note IDs from AsyncStorage.
 * @returns A Promise that resolves to a Set of strings (note IDs).
 */
export const getBookmarkedNoteIds = async (): Promise<Set<string>> => {
  return await getBookmarksSet();
};

/**
 * Toggles a bookmark for a given note ID.
 * It fetches the current bookmarks, adds or removes the ID, and persists the updated set.
 * @param noteId The ID of the note to toggle.
 * @returns A Promise that resolves to the new Set of bookmarked note IDs.
 */
export const toggleBookmark = async (noteId: string): Promise<Set<string>> => {
  const currentBookmarks = await getBookmarksSet();

  if (currentBookmarks.has(noteId)) {
    currentBookmarks.delete(noteId);
  } else {
    currentBookmarks.add(noteId);
  }

  try {
    const jsonValue = JSON.stringify(Array.from(currentBookmarks));
    await AsyncStorage.setItem(BOOKMARKS_NOTES, jsonValue);
  } catch (e) {
    console.error('Failed to save bookmarked notes.', e);
    // Revert the change in memory if saving fails
    if (currentBookmarks.has(noteId)) {
      currentBookmarks.delete(noteId);
    } else {
      currentBookmarks.add(noteId);
    }
  }

  return currentBookmarks;
};
