import Link from 'next/link';
import { Input } from '../Input';
import Button from '../Button';
import useForm from 'hooks/useForm';

type FormValues = {
  nomeCompleto: string;
  telefone: string;
  cpf?: string;
  dataNascimento: string;
  email?: string;
  password?: string;
};

const FormSignin = () => {
  const signIn = (values: FormValues) => {
    const opa = {
      ...(values.nomeCompleto && { nomeCompleto: values.nomeCompleto }),
      ...(values.telefone && { telefone: values.telefone }),
      ...(values.email && { email: values.email }),
      ...(values.cpf && { cpf: values.cpf }),
      ...(values.dataNascimento && { dataNascimento: values.dataNascimento })
    };
    return opa;
  };

  const { data, errors, handleChange, handleSubmit } = useForm({
    initialValues: {} as FormValues
  });

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="nomeCompleto"
        // isRequired
        placeholder="nome completo"
        onChange={handleChange('nomeCompleto')}
        message={errors.nomeCompleto}
        contentProps={{
          marginBottom: '1rem'
        }}
      />
      <Input
        name="telefone"
        placeholder="telefone com DDD"
        onChange={handleChange('telefone')}
        contentProps={{
          marginBottom: '1rem'
        }}
      />
      <Input
        name="email"
        placeholder="e-mail"
        type="email"
        onChange={handleChange('email')}
        contentProps={{
          marginBottom: '1rem'
        }}
      />
      <Input
        name="cpf"
        placeholder="cpf"
        onChange={handleChange('cpf')}
        contentProps={{
          marginBottom: '1rem'
        }}
      />
      <Input
        name="dataNascimento"
        placeholder="data de nascimento"
        onChange={handleChange('dataNascimento')}
        contentProps={{
          marginBottom: '1rem'
        }}
      />
      {/* <Link href="/sign-in" passHref> */}
      <Button type="submit" marginBottom="8px">
        próximo
      </Button>
      {/* </Link> */}
      <Button color="secondary">voltar para login</Button>
    </form>
  );
};

export default FormSignin;
