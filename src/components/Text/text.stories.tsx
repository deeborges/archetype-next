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

// {
//   ' eh recomendavel nao colacar o fontsize junto com o type pois o type ja vem com size'
// }

export const WithInitalValues: Story = () => (
  <>
    <Text>
      Text default com padrão <b>p</b> e <b>font-size</b> 16(1rem)
    </Text>
  </>
);

export const WithFontSize: Story = () => (
  <>
    <Text fontSize="xl_6">
      <b>p</b> e <b>font-size</b> de 96px
    </Text>
    <Text fontSize="xl_5">
      <b>p</b> e <b>font-size</b> de 80px
    </Text>
    <Text fontSize="xl_4">
      <b>p</b> e <b>font-size</b> de 64px
    </Text>
    <Text fontSize="xl_3">
      <b>p</b> e <b>font-size</b> de 48px
    </Text>
    <Text fontSize="xl_2_5">
      <b>p</b> e <b>font-size</b> de 40px
    </Text>
    <Text fontSize="xl_2">
      <b>p</b> e <b>font-size</b> de 32px
    </Text>
    <Text fontSize="large">
      <b>p</b> e <b>font-size</b> de 24px
    </Text>
    <Text fontSize="medium">
      <b>p</b> e <b>font-size</b> de 20px
    </Text>
    <Text fontSize="default">
      <b>p</b> e <b>font-size</b> default com padrão
    </Text>
    <Text fontSize="small">
      <b>p</b> e <b>font-size</b> de 14px
    </Text>
    <Text fontSize="xsmall">
      <b>p</b> e <b>font-size</b> de 12px
    </Text>
    <Text fontSize="xxsmall">
      <b>p</b> e <b>font-size</b> de 10px
    </Text>
  </>
);

export const WithTypes: Story = () => (
  <>
    <Text type="body-1">Corpo de tipo 1</Text>
    <Text type="body-2">Corpo de tipo 2</Text>
    <Text type="caption">Caption</Text>
    <Text type="label">label</Text>
    <Text type="subtitle">subtitle</Text>
  </>
);
