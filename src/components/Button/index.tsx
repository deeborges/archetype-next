import { Content } from './styles';
import { Spinner } from '../Spinner';
import { ColorsTypes } from 'components/tokens-types';
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
  onClick?: () => void;
  // onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
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
  ...props
}: ButtonProps) => (
  <Content
    color={color}
    disabled={loading || disabled}
    height={height}
    width={width}
    {...props}
  >
    {!!loading && <Spinner />}
    {!!leftIcon && leftIcon}
    {!!children && <span>{children}</span>}
    {!!rightIcon && rightIcon}
  </Content>
);

export default Button;
