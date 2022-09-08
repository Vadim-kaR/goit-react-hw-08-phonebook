import { Box } from 'components/Box';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { Formik } from 'formik';
import {
  FormikForm,
  InputeTitle,
  Inpute,
  Button,
  Error,
  Text,
  LabelText,
} from './Login.styled';
import * as yup from 'yup';

const Login = () => {
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
    <Box pt={40} color="#fff">
      <Text>Log In</Text>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormikForm autoComplete="off">
          <InputeTitle>
            <LabelText>Email</LabelText>

            <Inpute name="email" />
            <Error component="div" name="email" />
          </InputeTitle>
          <InputeTitle>
            <LabelText>Password</LabelText>

            <Inpute name="password" />
            <Error component="div" name="password" />
          </InputeTitle>
          <Button type="submit">Sign in</Button>
        </FormikForm>
      </Formik>
    </Box>
  );
};

export default Login;
