import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import classes from './index.module.scss';

const TextInput = (props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  const { className, ...remains } = props;
  const rootClass = `${classes.root} ${className}`;

  return <input className={rootClass} {...remains} />;
};

export default TextInput;
