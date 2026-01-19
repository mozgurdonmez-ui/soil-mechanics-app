// src/theme/tokens.ts
export const colors = {
  primary: '#00A896',
  background: '#FFFFFF',
  surface: '#F7FAFC',
  card: '#FFFFFF',
  text: '#1A1A1A',
  mutedText: '#7A8794',
  border: '#E6EDF3',
  shadow: '#000000',
};

export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 };

export const radii = { sm: 8, md: 12, lg: 16, xl: 24, full: 9999 };

export const elevation = {
  dock: { shadowColor: colors.shadow, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.10, shadowRadius: 16, elevation: 8 },
  card: { shadowColor: colors.shadow, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.08, shadowRadius: 10, elevation: 4 },
};

export const typography = {
  label: { fontSize: 12, fontWeight: '600' as const },
  body: { fontSize: 16, fontWeight: '400' as const },
};

export const theme = { colors, spacing, radii, elevation, typography };
