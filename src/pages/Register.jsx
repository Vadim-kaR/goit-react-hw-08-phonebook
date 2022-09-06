import { useState } from 'react';
import authOperations from '../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

const styles = {
  form: {
    width: 320,
    paddingTop: 30,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Имя
          <input type="text" name="name" onChange={handleChange} />
        </label>

        <label style={styles.label}>
          Почта
          <input type="email" name="email" onChange={handleChange} />
        </label>

        <label style={styles.label}>
          Пароль
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Register;
