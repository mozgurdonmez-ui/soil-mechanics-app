import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../../src/ui/AppHeader';
import { colors, spacing, typography } from '../../src/theme/tokens';
import { notes } from '../../src/data/seed';
import { getJson, setJson } from '../../src/storage/storage';
import { BOOKMARKS_NOTES } from '../../src/storage/keys';

// For MVP, we'll just display the first note's content as a placeholder.
const note = notes[0];
const NOTE_CONTENT = {
  title: note.title,
  body: [
    "Soil mechanics is a branch of soil physics and applied mechanics that describes the behavior of soils. It differs from fluid mechanics and solid mechanics in the sense that soils consist of a heterogeneous mixture of fluids (usually air and water) and particles (usually clay, silt, sand, and gravel) but soil may also contain organic solids and other matter.",
    "Along with rock mechanics, soil mechanics provides the theoretical basis for analysis in geotechnical engineering, a subdiscipline of civil engineering, and engineering geology, a subdiscipline of geology. Soil mechanics is used to analyze the deformations of and flow of fluids within natural and man-made structures that are supported on or made of soil, or structures that are buried in soils.",
  ],
  figure: {
    number: "1.1",
    caption: "A diagram illustrating the three-phase nature of soil, consisting of solid particles, water, and air.",
  }
};

export default function NotesDetailScreen() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const loadBookmarkState = async () => {
      const bookmarkedNoteIds = await getJson<string[]>(BOOKMARKS_NOTES, []);
      setIsBookmarked(bookmarkedNoteIds.includes(note.id));
    };
    loadBookmarkState();
  }, []);

  const handleBookmarkToggle = async () => {
    const bookmarkedNoteIds = await getJson<string[]>(BOOKMARKS_NOTES, []);
    const newBookmarkedIds = isBookmarked
      ? bookmarkedNoteIds.filter(id => id !== note.id)
      : [...bookmarkedNoteIds, note.id];

    await setJson(BOOKMARKS_NOTES, newBookmarkedIds);
    setIsBookmarked(!isBookmarked);
  };

  return (
    <View style={styles.container}>
      <AppHeader
        title={NOTE_CONTENT.title}
        showBackButton
        rightAction={{
          icon: isBookmarked ? 'bookmark' : 'bookmark-outline',
          onPress: handleBookmarkToggle,
        }}
      />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.heading}>Introduction</Text>
        <Text style={styles.paragraph}>{NOTE_CONTENT.body[0]}</Text>

        <View style={styles.figureContainer}>
          <View style={styles.figurePlaceholder} />
          <Text style={styles.figureCaption}>
            <Text style={styles.figureLabel}>Figure {NOTE_CONTENT.figure.number}:</Text> {NOTE_CONTENT.figure.caption}
          </Text>
        </View>

        <Text style={styles.paragraph}>{NOTE_CONTENT.body[1]}</Text>
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
  heading: {
    ...typography.h2,
    marginBottom: spacing.md,
  },
  paragraph: {
    ...typography.body,
    marginBottom: spacing.md,
    lineHeight: 24,
  },
  figureContainer: {
    marginBottom: spacing.md,
    alignItems: 'center',
  },
  figurePlaceholder: {
    width: '100%',
    height: 150,
    backgroundColor: colors.card,
    borderRadius: 8,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  figureCaption: {
    ...typography.caption,
    color: colors.text,
    textAlign: 'center',
    paddingHorizontal: spacing.lg,
  },
  figureLabel: {
    fontWeight: 'bold',
  },
});
