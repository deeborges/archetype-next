import { Meta, Story } from '@storybook/react/types-6-0';
import { Input } from '.';

export default {
  title: 'Colibri/Components/Input',
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

export const isRequired = () => (
  <Input
    isRequired
    name="large"
    placeholder="Large"
    variant="outlined"
    contentProps={{
      marginBottom: '1rem'
    }}
  />
);

export const withError = () => (
  <Input
    isRequired
    name="Error"
    type="email"
    value="Error"
    placeholder="Large"
    variant="outlined"
    contentProps={{
      marginBottom: '1rem'
    }}
  />
);
