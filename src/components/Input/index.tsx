import {
  forwardRef,
  InputHTMLAttributes,
  ForwardRefRenderFunction
} from 'react';
import {
  Content,
  Message,
  Input as StyledInput,
  Label,
  ContentProps,
  MessageProps,
  InputLabelProps
} from './styled';

export type InputProps = {
  name: string;
  label?: string;
  message?: string;
  types?: 'filled' | 'outlined';
  variant?: 'focused' | 'actived' | 'inactive' | 'hover' | 'error' | 'disabled';
  contentProps?: ContentProps;
  labelProps?: InputLabelProps;
  messageProps?: MessageProps;
} & InputHTMLAttributes<HTMLInputElement>;

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    label,
    message,
    variant = 'inactive',
    contentProps,
    labelProps,
    messageProps,
    ...rest
  },
  ref
) => (
  <Content {...contentProps}>
    {!!label && (
      <Label htmlFor={name} {...labelProps}>
        {label}
      </Label>
    )}
    <StyledInput
      data-testid={`cy-${name}`}
      id={name}
      name={name}
      ref={ref}
      variant={variant}
      {...rest}
    />
    {!!message && <Message {...messageProps}>{message}</Message>}
  </Content>
);

export const Input = forwardRef(InputBase);
