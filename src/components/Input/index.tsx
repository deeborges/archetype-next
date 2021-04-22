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
  variant?: 'outlined' | 'unstyled' | 'flushed' | 'filled';
  contentProps?: ContentProps;
  labelProps?: InputLabelProps;
  messageProps?: MessageProps;
  isRequired?: boolean;
  placeholder?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    label,
    message,
    variant = 'outlined',
    contentProps,
    labelProps,
    messageProps,
    isRequired = false,
    placeholder,
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
      placeholder={`${placeholder ?? ''}${isRequired ? ' *' : ''}`}
      required={isRequired}
      {...rest}
    />
    {!!message && <Message {...messageProps}>{message}</Message>}
  </Content>
);

export const Input = forwardRef(InputBase);
