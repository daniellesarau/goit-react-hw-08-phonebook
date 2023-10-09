import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { PrivateRoute } from 'Routes/PrivateRoute';
import { refreshUser } from 'redux/operations';

const Home = lazy(() => import('./Pages/Home/HomePage'));
const Login = lazy(() => import('./Pages/Login/LoginPage'));
const Register = lazy(() => import('./Pages/Register/RegisterPage'));
const Contacts = lazy(() => import('./Pages/Contacts/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Route>
    </Routes>
  );
};
