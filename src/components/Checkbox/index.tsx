import { Colors } from 'components/types';
import { Container, Input, Label } from './styled';

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: Colors;
};
export const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'noverde'
}: CheckboxProps) => (
  <Container>
    <Input id={labelFor} type="checkbox" />
    {!!label && (
      <Label htmlFor={labelFor} labelColor={labelColor}>
        {label}
      </Label>
    )}
  </Container>
);
