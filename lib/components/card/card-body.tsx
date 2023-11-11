import { CardBodyProps } from './types';
import useStyles from './card-body.use-styles';

export const CardBody = (props: CardBodyProps) => {
  const { children, css, ...remains } = props;
  const { root } = useStyles();

  return (
    <div css={[root, css]} {...remains}>{children}</div>
  );
};
