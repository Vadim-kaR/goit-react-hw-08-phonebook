import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { Box } from 'components/Box';
import AuthNav from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  // console.log(isLoggedIn);
  return (
    <Box as="header" display="flex" justifyContent="space-between">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};

export default AppBar;
