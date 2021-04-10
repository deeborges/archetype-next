import { Meta, Story } from '@storybook/react/types-6-0';
import { Text } from './index';

export default {
  title: 'Text',
  component: Text
} as Meta;

export const WithTypeBody1: Story = () => (
  <>
    <Text>Ola mundo</Text>
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

export const TextWithFontSize: Story = () => (
  <>
    <Text fontSize="xl_6">Extra larga - 6</Text>
    <br />
    {
      ' eh recomendavel nao colacar o fontsize junto com o type pois o type ja vem com size'
    }
    <Text tag="label" fontSize="xxsmall">
      Label
    </Text>
    <br />
  </>
);
