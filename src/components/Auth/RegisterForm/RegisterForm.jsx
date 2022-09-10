import { authOperations } from 'redux/auth';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormInpute } from '../common/Inpute/Inpute';
import { Button } from '../common/Button/Button';
import { FormikForm, Error } from './RegisterForm.styled';

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
      <FormikForm autoComplete="off">
        <FormInpute text={'Name'} name={'name'}>
          <Error component="div" name="name" />
        </FormInpute>

        <FormInpute text={'Email'} name={'email'}>
          <Error component="div" name="email" />
        </FormInpute>

        <FormInpute text={'Password'} name={'password'} type={'password'}>
          <Error component="div" name="password" />
        </FormInpute>
        <Button type="submit">Register</Button>
      </FormikForm>
    </Formik>
  );
};
