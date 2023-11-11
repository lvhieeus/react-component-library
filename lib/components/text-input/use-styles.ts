import { css, ComponentStyles } from '@lib/styles';
import { useTheme } from '@lib/theme';

export default function useStyles(): ComponentStyles {
  const { spacings, radii, colors } = useTheme();

  return {
    root: css({
      padding: spacings.md,
      borderRadius: radii.sm,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: colors.gray[500],
      ':focus': {
        borderColor: colors.gray[900],
        outline: 'none',
      },
      ':disabled': {
        borderColor: colors.gray[200],
      },
    }),
  };
}
