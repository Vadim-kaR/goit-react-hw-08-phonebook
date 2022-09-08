import authOperations from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { Box } from 'components/Box';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  FormikForm,
  InputeTitle,
  Inpute,
  Button,
  LabelText,
  Text,
  Error,
} from './Register.styled';

const Register = () => {
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
    dispatch(authOperations.register({ name, email, password }));
    resetForm();
  };
  return (
    <Box pt={40} color="#fff">
      <Text>Registration</Text>
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
          <InputeTitle>
            <LabelText>Name</LabelText>

            <Inpute name="name" />
            <Error component="div" name="name" />
          </InputeTitle>

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
          <Button type="submit">Register</Button>
        </FormikForm>
      </Formik>
    </Box>
  );
};

export default Register;
