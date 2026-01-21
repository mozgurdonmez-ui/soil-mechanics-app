import AsyncStorage from '@react-native-async-storage/async-storage';
import { BOOKMARKS_NOTES } from './keys';

const getBookmarksSet = async (): Promise<Set<string>> => {
  try {
    const jsonValue = await AsyncStorage.getItem(BOOKMARKS_NOTES);
    return jsonValue != null ? new Set(JSON.parse(jsonValue)) : new Set();
  } catch (e) {
    console.error('Failed to load bookmarks.', e);
    return new Set();
  }
};

export const getBookmarkedNoteIds = async (): Promise<Set<string>> => {
  return getBookmarksSet();
};

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
    console.error('Failed to save bookmarks.', e);
  }
  return currentBookmarks;
};
