import { css, ComponentStyles } from '@lib/styles';
import { useTheme } from '@lib/theme';

import { CardProps } from './types';

export default function useStyles(props: CardProps): ComponentStyles {
  const { variant = 'raised' } = props;
  const { radii, colors } = useTheme();

  return {
    root: css({
      borderRadius: radii.sm,
      boxShadow: variant === 'raised' ? ['0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'] : 'none',
      border: variant === 'raised' ? 'none' : `1px solid ${colors.gray[200]}`,
    }),
  };
}
