import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '@/src/theme';

type CardProps = {
  title: string;
  subtitle?: string;
  image?: string;
  isBookmarked?: boolean;
  onBookmarkPress?: () => void;
  // Allows the component to be used with React Navigation Pressable etc.
  onPress?: () => void;
};

export const Card = ({
  title,
  subtitle,
  image,
  isBookmarked = false,
  onBookmarkPress,
  onPress,
}: CardProps) => {
  const handleBookmarkPress = (e: any) => {
    if (onBookmarkPress) {
      e.stopPropagation(); // Prevent event from bubbling to the parent Pressable
      onBookmarkPress();
    }
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
        {onBookmarkPress && (
          <Pressable onPress={handleBookmarkPress} hitSlop={10}>
            <Ionicons
              name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
              size={24}
              color={isBookmarked ? theme.colors.primary : theme.colors.textSecondary}
            />
          </Pressable>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.card,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginTop: 4,
  },
});
