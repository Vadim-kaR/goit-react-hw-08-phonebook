import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { Box } from 'components/Box';
import AuthNav from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';

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
