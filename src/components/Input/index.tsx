import { InputElementProps } from '@chakra-ui/react';
import { ForwardRefRenderFunction } from 'react';
import { forwardRef } from 'react';
import { HTMLAttributes } from 'react';
import { Content } from './styled';

export type InputProps = {
  name: string;
  label?: string;
  message?: string;
  variant?: 'focused' | 'actived' | 'inactive' | 'hover' | 'error' | 'disabled';
} & HTMLAttributes<InputElementProps>;

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, message, variant = 'inactive', ...rest },
  ref
) => (
  <Content>
    {!!label && <label htmlFor={name}>{label}</label>}
    <Input
      data-testid={`cy-${name}`}
      id={name}
      name={name}
      ref={ref}
      variant={variant}
      {...rest}
    />
    {!!message && <span>{message}</span>}
  </Content>
);

export const Input = forwardRef(InputBase);
