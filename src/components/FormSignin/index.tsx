import { Button, Input } from '..';
import useForm from '../../hooks/useForm';

type FormSignInValues = {
  nomeCompleto: string;
  telefone: string;
  email: string;
  cpf: string;
  dataNascimento: string;
};

const FormSignin = () => {
  const {
    data,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setErrors,
    setIsSubmitting
  } = useForm<FormSignInValues>({
    onSubmit: () => {
      setIsSubmitting(true);
    },
    validations: {
      nomeCompleto: {
        required: {
          message: 'seu nome todinho, hein!?',
          value: true
        }
      },
      telefone: {
        required: {
          message: 'cadê o telefone?',
          value: true
        }
      },
      email: {
        required: {
          message: 'não esqueça seu e-mail',
          value: true
        }
      },
      cpf: {
        required: {
          message: 'não esqueça o cpf',
          value: true
        }
      },
      dataNascimento: {
        required: {
          message: 'nasceu não?',
          value: true
        }
      }
    }
  });

  function handleChangeNomeCompleto(value: any) {
    let message = '';
    if (value.length < 3) {
      message = 'menor de 3';
    }
    if (value.length > 5) {
      message = 'passou de 5';
    }
    if (value.lenght === '') {
      message = 'informe alguma coisa :(';
    }
    if (message) {
      setErrors({
        ...errors,
        nomeCompleto: message
      });
      return;
    }
    setErrors({
      ...errors,
      nomeCompleto: ''
    });
    return value;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        isRequired
        name="nomeCompleto"
        placeholder="nome completo"
        onChange={handleChange('nomeCompleto', handleChangeNomeCompleto)}
        message={errors.nomeCompleto}
        contentProps={{
          marginBottom: errors.nomeCompleto ? '2rem' : '1rem'
        }}
      />
      <Input
        isRequired
        name="telefone"
        placeholder="telefone com DDD"
        onChange={handleChange('telefone')}
        message={errors.telefone}
        contentProps={{
          marginBottom: errors.telefone ? '2rem' : '1rem'
        }}
      />
      <Input
        isRequired
        name="email"
        type="email"
        placeholder="e-mail"
        onChange={handleChange('email')}
        message={errors.email}
        contentProps={{
          marginBottom: errors.email ? '2rem' : '1rem'
        }}
      />
      <Input
        isRequired
        name="cpf"
        placeholder="cpf"
        onChange={handleChange('cpf')}
        message={errors.cpf}
        contentProps={{
          marginBottom: errors.cpf ? '2rem' : '1rem'
        }}
      />
      <Input
        isRequired
        name="dataNascimento"
        placeholder="data de nascimento"
        onChange={handleChange('dataNascimento')}
        message={errors.dataNascimento}
        contentProps={{
          marginBottom: errors.dataNascimento ? '2rem' : '1rem'
        }}
      />
      <Button type="submit" marginBottom="8px" loading={isSubmitting}>
        próximo
      </Button>
      <Button color="secondary">voltar para login</Button>
    </form>
  );
};

export default FormSignin;
