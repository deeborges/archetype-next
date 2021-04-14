import { Meta, Story } from '@storybook/react/types-6-0';
import { Stack } from '.';

export default {
  title: 'Components/Stack',
  component: Stack
} as Meta;

export const Initial: Story = () => (
  <Stack>
    <p>ola mundo</p>
    <p>ola mundo</p>
    <p>ola mundo</p>
  </Stack>
);
