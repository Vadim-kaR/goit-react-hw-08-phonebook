import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const user = useSelector(authSelectors.getUser);

  return {
    isLoggedIn,
    user,
  };
};
