import { Meta, Story } from '@storybook/react/types-6-0';
import { Checkbox, CheckboxProps } from '.';

export default {
  title: 'Components/Checkbox',
  component: Checkbox
} as Meta;

export const Initial: Story<CheckboxProps> = (args) => (
  <Checkbox label="Label" labelFor="label" {...args} />
);
