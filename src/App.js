import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './hooks/useAuth';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import PublicRoute from 'hocs/Routes/PublicRoute';
import PrivateRoute from 'hocs/Routes/PrivatRoute';
import { Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register/Register'));
const Login = lazy(() => import('./pages/Login/Login'));
const Contacts = lazy(() => import('./pages/Contacts'));
const SharedLayout = lazy(() => import('./layout/SharedLayout/SharedLayout'));
const NoteFound = lazy(() => import('./pages/NotFound'));

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
        <Suspense fallback={null}>
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
              <Route path="*" element={<NoteFound />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
}

export { App };
