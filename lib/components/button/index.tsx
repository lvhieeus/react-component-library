import { ButtonProps } from './types';
import useStyle from './use-styles';

export const Button = (props: ButtonProps) => {
  const { children, css, ...remains } = props;
  const { root } = useStyle(props);

  return <button css={[root, css]} {...remains}>{children}</button>;
};
