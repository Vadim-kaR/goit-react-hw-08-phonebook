import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <Link to="/register">Регистрация</Link>
      <Link to="/login">Логин</Link>
    </div>
  );
};
export default AuthNav;
