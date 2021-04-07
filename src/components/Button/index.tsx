import { Content } from './styles';

export type sizes = 'x_small' | 'small' | 'medium' | 'large';
export type variants = 'solid' | 'outlined' | 'link' | 'ghost';
export type colors = 'default' | 'primary' | 'danger';

export type ButtonProps = {
  size?: sizes;
  variant?: variants;
  color?: colors;
  children?: React.ReactNode;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  size = 'medium',
  variant = 'solid',
  color = 'primary',
  fullWidth = false,
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) => (
  <Content color={color} fullWidth={fullWidth} {...props}>
    {!!leftIcon && leftIcon}
    {!!children && <span>{children}</span>}
    {!!rightIcon && rightIcon}
  </Content>
);

export default Button;
