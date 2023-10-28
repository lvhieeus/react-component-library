import { css, ComponentStyles } from '@lib/styles';
import { useTheme } from '@lib/theme';

import { ButtonProps } from './types';

export default function useStyles(props: ButtonProps): ComponentStyles {
  const { variant = 'contained', isPrimary } = props;
  const { spacings, colors } = useTheme();

  const backgroundColor = isPrimary ? colors.primary : colors.gray200;
  const textColor = isPrimary ? colors.white : colors.black;

  return {
    root: css({
      cursor: 'pointer',
      padding: `${spacings.sm} ${spacings.md}`,
      backgroundColor: variant === 'contained' ? backgroundColor : 'transparent',
      borderColor: backgroundColor,
      borderRadius: spacings.sm,
      color: textColor,
      ':disabled': {
        pointerEvents: 'none',
        backgroundColor: colors.gray100,
        color: colors.gray500,
      },
    }),
  };
}
