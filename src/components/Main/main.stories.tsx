import { Meta, Story } from '@storybook/react/types-6-0';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'default',
    data: 'default'
  }
} as Meta;

export const Presentation: Story = (args) => <Main {...args} />;

Presentation.args = {
  title: 'Um título qualquer',
  data: Date.now()
};
