import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useAuth } from 'hooks/useAuth';
import { Text, UserNameText, Button } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <Text>
        Welcome, <UserNameText>{user.name}</UserNameText>
      </Text>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Quit
      </Button>
    </div>
  );
};

export default UserMenu;
