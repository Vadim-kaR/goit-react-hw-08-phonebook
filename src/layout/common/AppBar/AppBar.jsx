import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import { Box } from 'components/Box';
import AuthNav from 'layout/common/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      as="header"
      pt={15}
      pb={5}
      display="flex"
      justifyContent="space-between"
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};

export default AppBar;
