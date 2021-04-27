import { Meta, Story } from '@storybook/react/types-6-0';
import Steps from '.';

export default {
  title: 'Steps',
  component: Steps
} as Meta;

export const Initial: Story = (args) => (
  <Steps inititalValues={5} currency={3} />
);
