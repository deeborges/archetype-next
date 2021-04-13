import { Meta, Story } from '@storybook/react/types-6-0';
import { Content } from './styled';

export default {
  title: 'Tooltip',
  component: Content
} as Meta;

export const Initial: Story = (args) => (
  <Content role="tooltip" aria-label="Valor da tooltip">
    Tooltip
  </Content>
);
