import { TextInputProps } from './types';
import useStyles from './useStyles';

const TextInput = (props: TextInputProps) => {
  const { css, ...remains } = props;
  const { root } = useStyles();

  return <input css={[root, css]} {...remains} />;
};

export default TextInput;
