import { Meta, Story } from '@storybook/react/types-6-0';
import { Input } from '.';

export default {
  title: 'Components/Input',
  component: Input
} as Meta;

export const Variants: Story = () => {
  return (
    <>
      <Input name="filled" placeholder="filled" variant="filled" />
      <Input name="outlined" placeholder="outlined" variant="outlined" />
      <Input name="flushed" placeholder="flushed" variant="flushed" />
      <Input name="unstyled" placeholder="unstyled" variant="unstyled" />
    </>
  );
};

export const ErrorNoValue = () => (
  <Input
    isRequired
    name="Error"
    placeholder="Label"
    autoFocus
    variant="outlined"
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
    variant="outlined"
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
