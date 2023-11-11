import { TextInputProps } from './types';
import useStyles from './use-styles';

export const TextInput = (props: TextInputProps) => {
  const { css, ...remains } = props;
  const { root } = useStyles();

  return <input css={[root, css]} {...remains} />;
};
