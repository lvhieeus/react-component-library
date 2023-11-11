import { CardHeaderProps } from './types';
import useStyles from './card-header.use-styles';

export const CardHeader = (props: CardHeaderProps) => {
  const { children, css, ...remains } = props;
  const { root } = useStyles();

  return (
    <div css={[root, css]} {...remains}>{children}</div>
  );
};
