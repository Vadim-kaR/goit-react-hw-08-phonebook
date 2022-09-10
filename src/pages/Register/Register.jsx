import { Box } from 'components/Box';
import { RegisterForm } from 'components/Auth/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <Box pt={40} color="#fff">
      <Box as="h1" pb={40}>
        Registration
      </Box>
      <RegisterForm />
    </Box>
  );
};

export default Register;
