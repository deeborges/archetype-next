import { Content } from './styles';
import { Spinner } from '../Spinner';
import {
  ColorsTypes,
  SizesTypes,
  VariantsTypes
} from 'components/tokens-types';

export type ButtonProps = {
  size?: SizesTypes;
  variant?: VariantsTypes;
  color?: ColorsTypes;
  children?: React.ReactNode;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
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
  loading = false,
  ...props
}: ButtonProps) => (
  <Content
    color={color}
    fullWidth={fullWidth}
    size={size}
    variant={variant}
    disabled={loading}
    {...props}
  >
    {!!loading && <Spinner />}
    {!!leftIcon && leftIcon}
    {!!children && <span>{children}</span>}
    {!!rightIcon && rightIcon}
  </Content>
);

export default Button;
