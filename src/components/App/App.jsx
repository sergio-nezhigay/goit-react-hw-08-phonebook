import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import SharedLayout from '../SharedLayout/SharedLayout';
import LoginPage from 'Pages/LoginPage/LoginPage';
import ContactsPage from 'Pages/ContactsPage/ContactsPage';
import RegisterPage from 'Pages/RegisterPage/RegisterPage';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import Tasks from 'Pages/Tasks/Tasks';
import { RestrictedRoute } from 'components/RestrictedRoute/ResrictedRoute';
import { PrivateRoute } from 'components/ProvateRoute/PrivateRoute';

const Home = lazy(() => import('../../Pages/HomeView/HomeView'));
const Error404Page = lazy(() =>
  import('../../Pages/Error404Page/Error404Page')
);

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
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
        <Route path="contacts" element={<ContactsPage />} />
        {/* <Route path="tasks" element={<Tasks />} /> */}
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
