import { authOperations } from 'redux/auth';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormInput } from './common/Input/Input';
import { Button } from './common/Button/Button';
import { Error } from './common/Error/Error';
import { Form } from './common/Form/Form';

export const RegisterForm = () => {
  let schema = yup.object().shape({
    name: yup.string().max(16).required('"Name" is a required field'),
    email: yup
      .string()
      .email('Must be a valid email')
      .required('"Email" is a required field'),
    password: yup.string().max(16).required('"Password" is a required field'),
  });

  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    console.log(name, email, password);
    dispatch(authOperations.register({ name, email, password }));
    resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormInput text={'Name'} name={'name'}>
          <Error name={'name'} />
        </FormInput>

        <FormInput text={'Email'} name={'email'}>
          <Error name={'email'} />
        </FormInput>

        <FormInput text={'Password'} name={'password'} type={'password'}>
          <Error name={'password'} />
        </FormInput>
        <Button type="submit">Register</Button>
      </Form>
    </Formik>
  );
};
