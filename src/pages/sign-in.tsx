import Button from 'components/Button';
import { Input } from 'components/Input';
import Auth from 'templates/Auth';

export default function SignIn() {
  return (
    <Auth>
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
      <Button disabled>próximo</Button>
      <Button color="secondary">voltar para login</Button>
    </Auth>
  );
}
