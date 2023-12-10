import { css, ComponentStyles } from '@lib/styles';
import { useTheme } from '@lib/theme';

export default function useStyles(): ComponentStyles {
  const { spacings, colors } = useTheme();

  return {
    root: css({
      cursor: 'pointer',
      padding: spacings.sm,
      backgroundColor: 'transparent',
      borderRadius: '50%',
      border: 'none',
      color: colors.black,
      lineHeight: 0,

      ':hover': {
        backgroundColor: colors.gray[300],
      },

      ':active': {
        backgroundColor: colors.gray[400],
      },

      ':disabled': {
        pointerEvents: 'none',
        color: colors.gray[500],
        opacity: 0.5,
      },
    }),
  };
}
