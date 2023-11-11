import { css, ComponentStyles } from '@lib/styles';
import { useTheme } from '@lib/theme';

import { ButtonProps } from './types';

export default function useStyles(props: ButtonProps): ComponentStyles {
  const { variant = 'contained' } = props;
  const { spacings, colors, radii } = useTheme();

  return {
    root: css({
      cursor: 'pointer',
      padding: `${spacings.md} ${spacings.lg}`,
      backgroundColor: variant === 'contained' ? colors.gray[200] : 'transparent',
      borderColor: colors.gray[200],
      borderRadius: radii.sm,
      borderStyle: 'solid',
      borderWidth: 1,
      color: colors.black,

      ':hover': {
        backgroundColor: colors.gray[300],
        borderColor: colors.gray[300],
      },

      ':active': {
        backgroundColor: colors.gray[400],
        borderColor: colors.gray[400],
      },

      ':disabled': {
        pointerEvents: 'none',
        backgroundColor: variant === 'contained' ? colors.gray[100] : 'transparent',
        borderColor: colors.gray[100],
        color: colors.gray[500],
      },
    }),
  };
}
