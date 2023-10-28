import { ButtonProps } from './types';
import useStyle from './useStyles';

const Button = (props: ButtonProps) => {
  const { children, css, ...remains } = props;
  const { root } = useStyle(props);

  return <button css={[root, css]} {...remains}>{children}</button>;
};

export default Button;
