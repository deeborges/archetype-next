import { Meta, Story } from '@storybook/react/types-6-0';
import { Input } from '.';

export default {
  title: 'Input',
  component: Input
} as Meta;

export const O: Story = () => {
  return (
    <>
      <Input
        label="E-mail"
        type="email"
        name="email"
        placeholder="E-mail"
        contentProps={{
          width: '320px'
        }}
      />
      <Input
        label="E-mail"
        type="email"
        name="email"
        placeholder="E-mail"
        contentProps={{
          width: '320px'
        }}
        disabled
      />

      <Input
        label="E-mail"
        type="email"
        name="email"
        placeholder="E-mail"
        contentProps={{
          width: '320px'
        }}
        message="Algo de errado nao está certo"
      />
    </>
  );
};
