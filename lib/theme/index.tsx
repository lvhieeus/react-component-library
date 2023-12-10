/* eslint-disable react-refresh/only-export-components */
import { ReactNode } from 'react';
import { Interpolation } from '@emotion/serialize';
import { ThemeProvider as EmotionThemeProvider, useTheme as useEmotionTheme, Theme as EmotionTheme } from '@emotion/react';

interface ColorPalette {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export type CssInterpolation = Interpolation<EmotionTheme>;

export interface Theme extends EmotionTheme {
  colors: {
    black: string;
    white: string;
    gray: ColorPalette;
  };
  spacings: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  radii: {
    sm: string;
    md: string;
    lg: string;
  };
  font: {
    sizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  };
  zIndices: {
    popUp: number;
  };
}

interface ThemeProviderProps {
  theme?: Theme;
  children: ReactNode;
}

export const defaultTheme: Theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    gray: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923',
    },
  },
  spacings: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  font: {
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
    },
  },
  zIndices: {
    popUp: 1000,
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
