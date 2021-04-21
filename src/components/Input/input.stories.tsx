import { Meta, Story } from '@storybook/react/types-6-0';
import { Input } from '.';

export default {
  title: 'Colibri/Components/Input',
  component: Input
} as Meta;

export const Sizes: Story = () => {
  return (
    <>
      <Input
        label="X_Small"
        name="x_small"
        placeholder="X_Small"
        sizes="x_small"
        contentProps={{
          marginBottom: '1rem'
        }}
      />

      <Input
        label="Small"
        name="small"
        placeholder="Small"
        sizes="small"
        contentProps={{
          marginBottom: '1rem'
        }}
      />
      <Input
        label="Medium"
        name="medium"
        placeholder="Medium"
        sizes="medium"
        contentProps={{
          marginBottom: '1rem'
        }}
      />
      <Input
        label="Large"
        name="large"
        placeholder="Large"
        sizes="large"
        contentProps={{
          marginBottom: '1rem'
        }}
      />
    </>
  );
};

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

export const FilledWithSize = () => {
  return (
    <>
      <Input
        label="X_Small"
        name="x_small"
        placeholder="X_Small"
        sizes="x_small"
        variant="filled"
        contentProps={{
          marginBottom: '1rem'
        }}
      />

      <Input
        label="Small"
        name="small"
        placeholder="Small"
        sizes="small"
        variant="filled"
        contentProps={{
          marginBottom: '1rem'
        }}
      />
      <Input
        label="Medium"
        name="medium"
        placeholder="Medium"
        sizes="medium"
        variant="filled"
        contentProps={{
          marginBottom: '1rem'
        }}
      />
      <Input
        label="Large"
        name="large"
        placeholder="Large"
        sizes="large"
        variant="filled"
        contentProps={{
          marginBottom: '1rem'
        }}
      />
    </>
  );
};
