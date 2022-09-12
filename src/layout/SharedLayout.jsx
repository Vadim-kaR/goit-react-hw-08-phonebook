import { Outlet } from 'react-router-dom';
import AppBar from './common/AppBar/AppBar';
import { Box } from 'components/Box';
import { ToastContainer } from 'react-toastify';

const SharedLayout = () => {
  return (
    <Box maxWidth={1440} margin="0 auto" px={16}>
      <AppBar />
      <Outlet />
      <ToastContainer />
    </Box>
  );
};

export default SharedLayout;
