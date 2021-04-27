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
  InputLabelProps,
  Icon,
  InputWrapper
} from './styled';

export type InputProps = {
  name: string;
  label?: string;
  labelProps?: InputLabelProps;
  message?: string;
  messageProps?: MessageProps;
  contentProps?: ContentProps;
  isRequired?: boolean;
  placeholder?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  value?: string | ReadonlyArray<string> | number;
} & InputHTMLAttributes<HTMLInputElement>;

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    label,
    labelProps,
    message,
    messageProps,
    contentProps,
    isRequired = false,
    placeholder,
    iconLeft,
    iconRight,
    value,
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
    <InputWrapper>
      {!!iconLeft && <Icon iconLeft={iconLeft}>{iconLeft}</Icon>}
      <StyledInput
        data-testid={`cy-${name}`}
        name={name}
        ref={ref}
        placeholder={`${placeholder ?? ''}${isRequired ? ' *' : ''}`}
        message={message}
        iconLeft={iconLeft}
        iconRight={iconRight}
        value={value}
        {...(label ? { id: name } : {})}
        {...rest}
      />
      {!!iconRight && <Icon iconRight={iconRight}>{iconRight}</Icon>}
    </InputWrapper>
    {!!message && <Message {...messageProps}>{message}</Message>}
  </Content>
);

export const Input = forwardRef(InputBase);
