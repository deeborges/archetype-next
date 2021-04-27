/* eslint-disable @typescript-eslint/ban-types */
import { ChangeEvent, FormEvent, useState } from 'react';

interface Validation {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: string;
    message: string;
  };
  custom?: {
    isValid: (value: string) => boolean;
    message: string;
  };
}

type ErrorRecord<T> = Record<keyof T, string>;
type Validations<T extends {}> = Partial<Record<keyof T, Validation>>;

const useForm = <T extends Record<keyof T, any> = {}>(options?: {
  validations?: Validations<T>;
  initialValues?: Partial<T>;
  onSubmit?: () => void;
}) => {
  const [data, setData] = useState<T>((options?.initialValues || {}) as T);
  const [errors, setErrors] = useState<ErrorRecord<T>>({} as ErrorRecord<T>);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Needs to extend unknown so we can add a generic to an arrow function
  const handleChange = <S extends unknown>(
    key: keyof T,
    sanitizeFn?: (value: string) => S
  ) => (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
    e.persist();

    setData({
      ...data,
      [key]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // verifica se eu passei validacoes
    const validations = options?.validations;
    if (validations) {
      let valid = true;

      // o erros recebem as propriedades que eu passei
      const newErrors = {} as ErrorRecord<T>;
      for (const key in validations) {
        const value = data[key];
        const validation = validations[key];
        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }
        const pattern = validation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }
        const custom = validation?.custom;
        if (custom?.isValid && !custom.isValid(value)) {
          valid = false;
          newErrors[key] = custom.message;
        }
      }
      if (!valid) {
        setErrors(newErrors);
        return;
      }
    }
    setErrors({} as ErrorRecord<T>);
    if (options?.onSubmit) {
      options.onSubmit();
    }
  };

  return {
    handleChange,
    handleSubmit,
    setIsSubmitting,
    setErrors,
    data,
    errors,
    isSubmitting
  };
};

export default useForm;
