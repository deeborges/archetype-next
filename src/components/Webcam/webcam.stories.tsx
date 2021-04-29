import { Meta, Story } from '@storybook/react/types-6-0';
import { WebcamCapture } from '.';

export default {
  title: 'Webcam',
  component: WebcamCapture
} as Meta;

export const Initial: Story = () => <WebcamCapture />;
