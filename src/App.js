import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'Layout';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './hooks/useAuth';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from './redux/auth/auth-operations';
import PublicRoute from 'components/Routes/PublicRoute';
import PrivateRoute from 'components/Routes/PrivatRoute';

const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register/Register'));
const Login = lazy(() => import('./pages/Login/Login'));
const Contacts = lazy(() => import('./pages/Contacts'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        'Refreshing'
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<PublicRoute component={<Home />} />} />
            <Route
              path="/register"
              element={
                <PublicRoute
                  restricted
                  redirectedTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute
                  restricted
                  redirectedTo="/contacts"
                  component={<Login />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
}

export { App };
