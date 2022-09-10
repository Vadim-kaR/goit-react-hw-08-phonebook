import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Formik } from 'formik';
import { FormikForm, Error } from './LoginForm.styled';
import * as yup from 'yup';
import { FormInpute } from '../common/Inpute/Inpute';
import { Button } from '../common/Button/Button';

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
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormikForm autoComplete="off">
          <FormInpute text={'Email'} name={'email'}>
            <Error component="div" name="email" />
          </FormInpute>
          <FormInpute text={'Password'} name={'password'} type={'password'}>
            <Error component="div" name="password" />
          </FormInpute>
          <Button type={'submit'}>Sign in</Button>
        </FormikForm>
      </Formik>
    </>
  );
};
