import { Meta } from '@storybook/react/types-6-0';
import { Button } from '.';

import { FiClipboard } from 'react-icons/fi';

export default {
  title: 'Components/Button',
  component: Button
} as Meta;

export const Primary = () => <Button color="primary">Primary</Button>;
export const Secondary = () => <Button color="secondary">Primary</Button>;
export const Disabled = () => <Button disabled>Disabled</Button>;
export const WithLoading = () => <Button loading>Loading</Button>;

export const WithIconLeft = () => (
  <Button leftIcon={<FiClipboard height={'32px'} width={'32px'} />}>
    submit
  </Button>
);
