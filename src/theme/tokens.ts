export const colors = {
  primary: '#00A896', // A mint/teal shade
  secondary: '#F0F4F8',
  accent: '#FFC107', // Retaining accent for things like bookmarks
  text: '#1A1A1A',
  textSecondary: '#666666',
  background: '#FFFFFF',
  card: '#FFFFFF',
  border: '#E0E0E0',
  error: '#D32F2F',
  success: '#388E3C',
  mutedText: '#7A8794',
  shadow: '#000000',
  surface: '#F7FAFC',
};

export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 };

export const radii = { sm: 8, md: 12, lg: 16, xl: 24, full: 9999 };

export const elevation = {
  dock: { shadowColor: colors.shadow, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.10, shadowRadius: 16, elevation: 8 },
  card: { shadowColor: colors.shadow, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.08, shadowRadius: 10, elevation: 4 },
  shadow1: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  shadow2: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  shadow3: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
};

export const typography = {
  h1: { fontSize: 32, fontWeight: 'bold' as const },
  h2: { fontSize: 24, fontWeight: 'bold' as const },
  h3: { fontSize: 20, fontWeight: '600' as const },
  body: { fontSize: 16, fontWeight: 'normal' as const },
  caption: { fontSize: 12, fontWeight: 'normal' as const },
  label: { fontSize: 12, fontWeight: '600' as const },
};

export const theme = {
  colors,
  spacing,
  radii,
  elevation,
  typography,
};
