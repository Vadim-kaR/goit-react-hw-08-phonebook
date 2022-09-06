import { Box } from 'components/Box';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Box pt={40}>
      <h1>Страница Login</h1>
      <form autoComplete="off" onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="" style={styles.label}>
          Email
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label htmlFor="" style={styles.label}>
          Password
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <button type="submit">Войти</button>
      </form>
    </Box>
  );
};

export default Login;
