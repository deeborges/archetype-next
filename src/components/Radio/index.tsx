import { TokenColors } from 'components/types';
import { InputHTMLAttributes } from 'react';
import { Input, Label, Wrapper } from './styled';

type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
  onCheck?: (value?: RadioValue) => void;
  label?: string;
  labelColor?: TokenColors;
  labelFor?: string;
  value?: RadioValue;
  color?: TokenColors;
} & InputHTMLAttributes<HTMLInputElement>;

export const Radio = ({
  label,
  onCheck,
  labelColor = 'noverde',
  labelFor = '',
  value,
  color = 'noverde',
  ...props
}: RadioProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value);
  };

  return (
    <Wrapper>
      <Input
        id={labelFor}
        type="radio"
        value={value}
        onChange={onChange}
        color={color}
        {...props}
      />
      {!!label && (
        <Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </Label>
      )}
    </Wrapper>
  );
};
