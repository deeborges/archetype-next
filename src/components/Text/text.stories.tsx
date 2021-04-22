import { Meta } from '@storybook/react/types-6-0';
import { Text } from './index';

export default {
  title: 'Components/Text',
  component: Text
} as Meta;

export const Headline = () => <Text type="headline">Noverde</Text>;
export const Title = () => <Text type="title">Noverde</Text>;
export const SubHeading1 = () => <Text type="subheading-1">Noverde</Text>;
export const SubHeading2 = () => <Text type="subheading-2">Noverde</Text>;
export const Body1 = () => <Text type="body-1">Noverde</Text>;
export const Body2 = () => <Text type="body-2">Noverde</Text>;
export const Body3 = () => <Text type="body-3">Noverde</Text>;
export const Caption1 = () => <Text type="caption-1">Noverde</Text>;
export const Caption2 = () => <Text type="caption-2">Noverde</Text>;
export const Caption3 = () => <Text type="caption-3">Noverde</Text>;

export const Examples = () => (
  <>
    <Text>Come to the Dark Side of the Force</Text>
    <br />
    <Text weight="400">Come to the Dark Side of the Force</Text>
    <br />
    <Text weight="600">Come to the Dark Side of the Force</Text>
    <br />
    <Text weight="700">Come to the Dark Side of the Force</Text>
    <br />
    <Text weight="800">Come to the Dark Side of the Force</Text>
    <br />
  </>
);
