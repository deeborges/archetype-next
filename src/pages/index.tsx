import * as Icons from 'components/Icons';
import { Input } from 'components/Input';

export default function Home() {
  return (
    <>
      <Icons.Cloud />
      <Input
        name="deyv"
        type="email"
        label="oi"
        labelProps={{
          marginBottom: '12px'
        }}
        contentProps={{
          marginBottom: '12px',
          width: '120px'
        }}
        message="Ola mund"
        messageProps={{
          bottom: '-1rem'
        }}
      />
      <Input name="deyv" type="email" label="ola" />
      <Input name="deyv" type="email" label="mundo" />
    </>
  );
}
