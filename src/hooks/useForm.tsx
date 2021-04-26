import { useState, useEffect, FormEvent } from 'react';

const useForm = ({ callback, validate }: any) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [callback, errors, isSubmitting]);

  const handleSubmit = (event: FormEvent) => {
    if (event) event.preventDefault();
    !!validate && setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event: FormEvent) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;
