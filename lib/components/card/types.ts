import { ReactNode } from 'react';

import { CssInterpolation } from '@lib/theme';

export type CardVariant = 'raised' | 'outlined';

export interface CardProps {
  children?: ReactNode;
  variant?: CardVariant;
  css?: CssInterpolation;
}

export interface CardHeaderProps {
  children?: ReactNode;
  css?: CssInterpolation;
}

export interface CardBodyProps {
  children?: ReactNode;
  css?: CssInterpolation;
}

export interface CardFooterProps {
  children?: ReactNode;
  css?: CssInterpolation;
}
