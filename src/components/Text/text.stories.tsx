import { Meta, Story } from '@storybook/react/types-6-0';
import { Text } from './styled';

export default {
  title: 'Text',
  component: Text
} as Meta;

export const P: Story = () => <Text as="p">paragrafo</Text>;
export const Span: Story = () => <Text as="p">label</Text>;
export const Label: Story = () => <Text as="label">label</Text>;
