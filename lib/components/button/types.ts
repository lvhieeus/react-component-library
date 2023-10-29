import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'contained' | 'outlined'

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: ButtonVariant;
};
