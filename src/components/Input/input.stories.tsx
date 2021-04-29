import { Meta, Story } from '@storybook/react/types-6-0';
import { Input } from '.';

export default {
  title: 'Input',
  component: Input
} as Meta;

export const Initial: Story = (args) => (
  <>
    <Input
      name="animated"
      animatedLabel="animated label"
      placeholder="animated"
    />
    <Input name="animated" label="animated label" />
  </>
);
