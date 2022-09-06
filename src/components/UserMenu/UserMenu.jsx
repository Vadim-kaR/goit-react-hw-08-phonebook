import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { useAuth } from 'hooks';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <span>Добро пожаловать, {user.name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </div>
  );
};

export default UserMenu;
