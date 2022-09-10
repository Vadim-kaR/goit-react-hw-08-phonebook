import { Box } from 'components/Box';
import { LoginForm } from 'components/Auth/LoginForm/LoginForm';

const Login = () => {
  return (
    <Box pt={40} color="#fff">
      <Box as="h1" pb={40}>
        Log In
      </Box>
      <LoginForm />
    </Box>
  );
};

export default Login;
