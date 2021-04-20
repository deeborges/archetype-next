import { Meta, Story } from '@storybook/react/types-6-0';
import { Input } from '.';

export default {
  title: 'Input',
  component: Input
} as Meta;

export const O: Story = () => <Input name="deyv" placeholder="Ola deyvison" />;
