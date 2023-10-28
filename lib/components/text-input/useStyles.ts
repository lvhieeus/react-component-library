import { css, ComponentStyles } from '@lib/styles';
import { useTheme } from '@lib/theme';

export default function useStyles(): ComponentStyles {
  const { spacings } = useTheme();

  return {
    root: css({
      padding: `${spacings.sm} ${spacings.md}`,
    }),
  };
}
