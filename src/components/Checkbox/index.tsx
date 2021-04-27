import { TokenColors } from 'components/types';
import { InputHTMLAttributes, useState } from 'react';
import { Container, Input, Label } from './styled';

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: TokenColors;
  isChecked?: boolean;
  value?: string | ReadonlyArray<string> | number;
  onCheck?: (status: boolean) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({
  onCheck,
  label,
  labelFor = '',
  labelColor = 'noverde',
  isChecked = false,
  value,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);

  const onChange = () => {
    const status = !checked;
    setChecked(status);
    !!onCheck && onCheck(status);
  };

  return (
    <Container>
      <Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {!!label && (
        <Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </Label>
      )}
    </Container>
  );
};
