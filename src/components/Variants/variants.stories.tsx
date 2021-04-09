import { Meta, Story } from '@storybook/react/types-6-0';
import { Text } from './styled';

export default {
  title: 'Text',
  component: Text
} as Meta;

export const Label: Story = () => (
  <Text tag="label" variants="heading-1">
    Label
  </Text>
);

export const SemVariant: Story = () => <Text tag="strong">Label</Text>;
