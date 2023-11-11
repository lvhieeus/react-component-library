import { CardFooterProps } from './types';
import useStyles from './card-footer.use-styles';

export const CardFooter = (props: CardFooterProps) => {
  const { children, css, ...remains } = props;
  const { root } = useStyles();

  return (
    <div css={[root, css]} {...remains}>{children}</div>
  );
};
