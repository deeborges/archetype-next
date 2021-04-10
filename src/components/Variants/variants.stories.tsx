import { Meta, Story } from '@storybook/react/types-6-0';
import { Text } from '.';

export default {
  title: 'Text',
  component: Text
} as Meta;

export const WithTypeBody1: Story = () => (
  <>
    <Text tag="p" type="body-1">
      Body 1
    </Text>
    <Text tag="p" type="body-1" weight="300">
      Body 1 com weight alterado
    </Text>
    <br />
    <Text tag="p" type="body-2">
      Body 2
    </Text>
    <br />
    <Text tag="span" type="caption">
      Caption
    </Text>
    <br />
    <Text tag="label" type="label">
      Label
    </Text>
    <br />
    <Text tag="p" type="subtitle">
      Subtitle
    </Text>
  </>
);
