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
  <Button color="default">Ola mundo novo</Button>
);
export const Primary: Story = () => (
  <Button color="primary">Ola mundo novo</Button>
);

export const ButtonXSmall: Story = () => <Button size="x_small">full</Button>;
export const ButtonFull: Story = () => <Button fullWidth>full</Button>;
