/* eslint-disable react-refresh/only-export-components */
import { ReactNode } from 'react';
import { ThemeProvider as EmotionThemeProvider, useTheme as useEmotionTheme } from '@emotion/react';

export interface Theme {
  colors: {
    primary: string;
    black: string;
    white: string;
    gray100: string;
    gray200: string;
    gray500: string;
  },
  spacings: {
    sm: string;
    md: string;
    lg: string;
  },
}

interface ThemeProviderProps {
  theme?: Theme;
  children: ReactNode;
}

export const defaultTheme: Theme = {
  colors: {
    primary: '#0081d6',
    black: '#000000',
    white: '#ffffff',
    gray100: '#edf2f7',
    gray200: '#e2e8f0',
    gray500: '#718096',
  },
  spacings: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
};

export const ThemeProvider = ({ theme = defaultTheme, children }: ThemeProviderProps) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

export const useTheme = (): Theme => {
  const theme = useEmotionTheme() as Theme;

  // If the received theme object is not empty, return it
  for (const _ in theme) {
    return theme;
  }
  // else, return the default theme
  return defaultTheme;
};
