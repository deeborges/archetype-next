import { Meta, Story } from '@storybook/react/types-6-0';
import Button from '.';

export default {
  title: 'Button',
  component: Button
} as Meta;

export const Initial: Story = () => (
  <Button color="danger" variant="outlined">
    Ola mundo novo
  </Button>
);
export const Danger: Story = () => (
  <Button color="danger">Ola mundo novo</Button>
);
export const Primary: Story = () => (
  <Button color="primary">Ola mundo novo</Button>
);
