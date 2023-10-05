import React, { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layout from 'components/Layout/Layout';
import { refreshUser } from 'redux/operations';

import { PrivateRoute } from 'Routes/PrivateRoute';
import { PublicRoute } from 'Routes/PublicRoute';

const HomePage = lazy(() => import('./Pages/Home/HomePage'));
const LoginPage = lazy(() => import('./Pages/Login/LoginPage'));
const RegisterPage = lazy(() => import('./Pages/Register/RegisterPage'));
const ContactsPage = lazy(() => import('./Pages/Contacts/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        {/* ruta temporara */}
        <Route
          path="/contacts"
          element={
            <PublicRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        {/* <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        /> */}
      </Route>
    </Routes>
  );
};
