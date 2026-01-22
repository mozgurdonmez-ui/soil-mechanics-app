import AsyncStorage from '@react-native-async-storage/async-storage';

const BOOKMARKS_KEY = 'note_bookmarks';

export const getBookmarkedNotes = async (): Promise<string[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(BOOKMARKS_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Failed to load bookmarks.', e);
    return [];
  }
};

export const isNoteBookmarked = async (noteId: string): Promise<boolean> => {
  const bookmarks = await getBookmarkedNotes();
  return bookmarks.includes(noteId);
};

export const toggleBookmark = async (noteId: string): Promise<boolean> => {
  try {
    const bookmarks = await getBookmarkedNotes();
    const isCurrentlyBookmarked = bookmarks.includes(noteId);
    let newBookmarks: string[];

    if (isCurrentlyBookmarked) {
      newBookmarks = bookmarks.filter((id) => id !== noteId);
    } else {
      newBookmarks = [...bookmarks, noteId];
    }

    await AsyncStorage.setItem(BOOKMARKS_KEY, JSON.stringify(newBookmarks));
    return !isCurrentlyBookmarked;
  } catch (e) {
    console.error('Failed to toggle bookmark.', e);
    return false;
  }
};
