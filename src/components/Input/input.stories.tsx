import { Meta, Story } from '@storybook/react/types-6-0';
import { Input } from '.';

export default {
  title: 'Components/Input',
  component: Input
} as Meta;

export const ErrorNoValue = () => (
  <Input
    isRequired
    name="Error"
    placeholder="Label"
    autoFocus
    contentProps={{
      marginBottom: '1rem'
    }}
  />
);

export const ErrorWithValue = () => (
  <Input
    isRequired
    name="Error"
    value="Input Text"
    type="email"
    placeholder="Label"
    autoFocus
    contentProps={{
      marginBottom: '1rem'
    }}
  />
);

export const InactiveNoValue = () => (
  <Input name="inactive" placeholder="label" />
);

export const InactiveWithValue = () => (
  <Input name="inactive" placeholder="label" value="Input Text" />
);

export const FocusedNoValue = () => (
  <Input name="inactive" placeholder="label" autoFocus />
);

export const FocusedWithValue = () => (
  <Input name="inactive" placeholder="label" value="Input Text" autoFocus />
);

export const DisabledNoValue = () => (
  <Input name="disabled" placeholder="label" autoFocus disabled />
);

export const DisabledWithValue = () => (
  <Input
    name="disabled"
    placeholder="label"
    value="Input Text"
    autoFocus
    disabled
  />
);
