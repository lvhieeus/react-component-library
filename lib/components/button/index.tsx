import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

import classes from './index.module.scss';

const Button = (props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  const { children, className = '', ...remains } = props;
  const rootClass = `${classes.root} ${className}`;

  return <button className={rootClass} {...remains}>{children}</button>;
};

export default Button;
