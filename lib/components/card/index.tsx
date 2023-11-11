import { CardProps } from './types';
import useStyles from './use-styles';

export const Card = (props: CardProps) => {
  const { children, css, ...remains } = props;
  const { root } = useStyles(props);

  return <div css={[root, css]} {...remains}>{children}</div>;
};

export { CardHeader } from './card-header';
export { CardFooter } from './card-footer';
export { CardBody } from './card-body';
