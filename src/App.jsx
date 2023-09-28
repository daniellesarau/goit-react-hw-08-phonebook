import React, { useEffect, lazy, Suspense } from 'react';
import css from './app.module.css';
import { Route, Routes } from 'react-router-dom';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from './redux/selectors';
import { fetchContact } from 'redux/operations';

const HomePage = lazy(() => import('./Pages/Home/HomePage'));
const LoginPage = lazy(() => import('./Pages/Login/LoginPage'));
const RegisterPage = lazy(() => import('./Pages/Register/RegisterPage'));
const ContactsPage = lazy(() => import('./Pages/Contacts/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route
        path="/register"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <RegisterPage />
          </Suspense>
        }
      />

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
