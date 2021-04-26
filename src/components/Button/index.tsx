import { Content } from './styles';
import { Spinner } from '../Spinner';
import { ColorsTypes } from 'core/tokens-types';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  color?: ColorsTypes;
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  height?: string;
  width?: string;
  marginBottom?: string;
  type?: 'button' | 'submit';
  as?: React.ElementType;
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  color = 'primary',
  children,
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  height,
  width,
  marginBottom,
  type,
  as,
  ...props
}: ButtonProps) => (
  <Content
    color={color}
    disabled={loading || disabled}
    height={height}
    width={width}
    marginBottom={marginBottom}
    type={type}
    as={as}
    {...props}
  >
    {!!loading && <Spinner />}
    {!!leftIcon && leftIcon}
    {!!children && <span>{children}</span>}
    {!!rightIcon && rightIcon}
  </Content>
);

export default Button;
