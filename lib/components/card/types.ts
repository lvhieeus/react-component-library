import { GeneralPropsWithChildren } from '@lib/types';

export type CardVariant = 'raised' | 'outlined';

export interface CardProps extends GeneralPropsWithChildren {
  variant?: CardVariant;
}
