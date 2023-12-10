import { IconButtonProps } from './types';
import useStyle from './use-styles';

export const IconButton = (props: IconButtonProps) => {
  const { children, css, ...remains } = props;
  const { root } = useStyle();

  return <button css={[root, css]} {...remains}>{children}</button>;
};
