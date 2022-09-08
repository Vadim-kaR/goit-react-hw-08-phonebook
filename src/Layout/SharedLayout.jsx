import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import { Box } from 'components/Box';
import { ToastContainer } from 'react-toastify';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <Box maxWidth={1440} margin="0 auto" px={16}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </Box>
  );
};
