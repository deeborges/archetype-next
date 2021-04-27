import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Content, ContentProps } from './styles';
import { Spinner } from '../Spinner';
import { ButtonColors } from './types';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  color?: ButtonColors;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  loading?: boolean;
  disabled?: boolean;
  height?: string;
  width?: string;
  marginBottom?: string;
  as?: React.ElementType;
} & ButtonTypes;

const ButtonBase: React.ForwardRefRenderFunction<ContentProps, ButtonProps> = (
  {
    as,
    children,
    color = 'primary',
    disabled = false,
    height,
    leftIcon,
    loading = false,
    marginBottom,
    rightIcon,
    width,
    ...props
  },
  ref
) => (
  <Content
    as={as}
    color={color}
    disabled={loading || disabled}
    height={height}
    marginBottom={marginBottom}
    ref={ref}
    width={width}
    leftIcon={leftIcon}
    rightIcon={rightIcon}
    {...props}
  >
    {!!leftIcon && !loading && leftIcon}
    {!!loading && <Spinner />}
    {!!children && <span>{children}</span>}
    {!!rightIcon && !loading && rightIcon}
  </Content>
);

export const Button = forwardRef(ButtonBase);
