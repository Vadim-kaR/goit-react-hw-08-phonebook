import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">Главная</Link>
      {isLoggedIn && <Link to="/contacts">Контакты</Link>}
    </nav>
  );
};

export default Navigation;
