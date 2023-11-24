import { ReactNode } from 'react';

import { CssInterpolation } from './theme';

export interface GeneralProps {
  css?: CssInterpolation;
  className?: string;
}

export interface GeneralPropsWithChildren extends GeneralProps {
  children?: ReactNode;
}
