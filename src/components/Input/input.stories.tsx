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
        name="deyv"
        placeholder="Ola deyvison"
        contentProps={{
          marginBottom: '1rem',
          width: '230px'
        }}
      />
      <Input
        name="deyv"
        placeholder="Ola deyvison"
        contentProps={{
          marginBottom: '1rem',
          width: '230px'
        }}
      />
      <Input
        name="deyv"
        placeholder="Ola deyvison"
        contentProps={{
          marginBottom: '1rem',
          width: '230px'
        }}
      />
      <Input name="deyv" placeholder="Ola deyvison" disabled />
    </>
  );
};
