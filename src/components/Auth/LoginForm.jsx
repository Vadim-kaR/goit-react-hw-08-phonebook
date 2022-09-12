import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Formik } from 'formik';
import { Error } from './common/Error/Error';
import * as yup from 'yup';
import { FormInput } from './common/Input/Input';
import { Button } from './common/Button/Button';
import { Form } from './common/Form/Form';

export const LoginForm = () => {
  let schema = yup.object().shape({
    email: yup
      .string()
      .email('Must be a valid email')
      .required('"Email" is a required field'),
    password: yup.string().max(16).required('"Password" is a required field'),
  });

  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(authOperations.logIn({ email, password }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormInput text={'Email'} name={'email'}>
          <Error name={'email'} />
        </FormInput>
        <FormInput text={'Password'} name={'password'} type={'password'}>
          <Error name={'password'} />
        </FormInput>
        <Button type={'submit'}>Sign in</Button>
      </Form>
    </Formik>
  );
};
