/* eslint-disable @typescript-eslint/no-empty-function */
import Link from 'next/link';
import { Input } from '../Input';
import Button from '../Button';

const FormSignin = () => {
  return (
    <form>
      <Input
        name="nome_completo"
        placeholder="nome completo"
        contentProps={{
          marginBottom: '1rem'
        }}
      />
      <Input
        name="telefone  "
        placeholder="telefone com DDD"
        contentProps={{
          marginBottom: '1rem'
        }}
      />
      <Input
        name="email"
        placeholder="e-mail"
        type="email"
        contentProps={{
          marginBottom: '1rem'
        }}
      />
      <Input
        name="cpf"
        placeholder="cpf"
        contentProps={{
          marginBottom: '1rem'
        }}
      />
      <Input
        name="data_nascimento"
        placeholder="data de nascimento"
        contentProps={{
          marginBottom: '1rem'
        }}
      />
      <Link href="/sign-in" passHref>
        <Button as="a" marginBottom="8px">
          próximo
        </Button>
      </Link>
      <Button color="secondary">voltar para login</Button>
    </form>
  );
};

export default FormSignin;
