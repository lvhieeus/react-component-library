import { css, ComponentStyles } from '@lib/styles';
import { useTheme } from '@lib/theme';

export default function useStyles(): ComponentStyles {
  const { colors, zIndices, spacings } = useTheme();

  return {
    root: css({
      zIndex: zIndices.popUp,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      position: 'absolute',
      top: 0,
      left: 0,
    }),
    backdrop: css({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: colors.black,
      opacity: 0.5,
    }),
    modal: css({
      position: 'relative',
      backgroundColor: colors.white,
    }),
    closeButton: css({
      position: 'absolute',
      top: spacings.md,
      right: spacings.md,
    }),
  };
}
