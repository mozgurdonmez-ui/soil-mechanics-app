// src/theme/tokens.ts

const colors = {
  primary: '#00A896', // A mint/teal shade
  secondary: '#F0F4F8',
  accent: '#FFC107',
  text: '#1A1A1A',
  textSecondary: '#666666',
  background: '#FFFFFF',
  card: '#FFFFFF',
  border: '#E0E0E0',
  error: '#D32F2F',
  success: '#388E3C',
};

const typography = {
  h1: { fontSize: 32, fontWeight: 'bold' },
  h2: { fontSize: 24, fontWeight: 'bold' },
  h3: { fontSize: 20, fontWeight: '600' },
  body: { fontSize: 16, fontWeight: 'normal' },
  caption: { fontSize: 12, fontWeight: 'normal' },
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

const radius = {
  sm: 4,
  md: 8,
  lg: 16,
  full: 9999,
};

const elevation = {
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

export const theme = {
  colors,
  typography,
  spacing,
  radius,
  elevation,
};
