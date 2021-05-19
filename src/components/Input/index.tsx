import React from 'react';
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
  InputWrapper,
  AnimatedLabel
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
  animatedLabel?: string;
  as?: React.ReactElement;
} & InputHTMLAttributes<HTMLInputElement>;

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    as,
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
    animatedLabel,
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
        id={name}
        data-testid={`cy-${name}`}
        name={name}
        ref={ref}
        placeholder={`${placeholder ?? ''}${isRequired ? ' *' : ''}`}
        message={message}
        iconLeft={iconLeft}
        iconRight={iconRight}
        value={value}
        animatedLabel={animatedLabel}
        {...rest}
      />
      {!!animatedLabel && (
        <AnimatedLabel id="animated-label" htmlFor={name} {...labelProps}>
          {animatedLabel}
        </AnimatedLabel>
      )}
      {!!iconRight && <Icon iconRight={iconRight}>{iconRight}</Icon>}
    </InputWrapper>
    {!!message && <Message {...messageProps}>{message}</Message>}
  </Content>
);

export const Input = forwardRef(InputBase);
