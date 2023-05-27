import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import SharedLayout from '../SharedLayout/SharedLayout';
import { RestrictedRoute } from 'components/RestrictedRoute/ResrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';

import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

const LoginPage = lazy(() => import('Pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('Pages/ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('Pages/RegisterPage/RegisterPage'));
const HomeView = lazy(() => import('Pages/HomeView/HomeView'));
const Error404Page = lazy(() => import('Pages/Error404Page/Error404Page'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h2>Refreshing user...</h2>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomeView />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<Error404Page />} />
      </Route>
    </Routes>
  );
};
