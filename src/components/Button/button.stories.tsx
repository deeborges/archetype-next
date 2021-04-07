import { Meta, Story } from '@storybook/react/types-6-0';
import Button from '.';

export default {
  title: 'Button',
  component: Button
} as Meta;

export const Initial: Story = () => (
  <Button color="default">Ola mundo novo</Button>
);
