export const COLORS = {
  light: {
    primary: '#2D3281',
    secondary: '#9BA0E8',
    background: '#FDFEFE',
    backgroundSoft: '#f6f3f3',
    textSoft: '#555',
    white: '#fff',
    gray: '#545F6E',
    red: '#DF3737',
    card: '#F5F0F0',
    link: '#6667CD',
    black: '#000000',
  },
  dark: {
    primary: '#2D3281',
    secondary: '#9BA0E8',
    background: '#222',
    backgroundSoft: '#333',
    textSoft: 'lightgray',
    black: '#000000',
  },
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 20,
  xxl: 24,
  xxxl: 28,
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
