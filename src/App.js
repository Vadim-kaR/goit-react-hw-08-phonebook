import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'Layout';
import Contacts from 'pages/Contacts';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './hooks/useAuth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from './redux/auth/auth-operations';

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  console.log(isRefreshing);
  return (
    <>
      {isRefreshing ? (
        'Refreshing'
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export { App };
