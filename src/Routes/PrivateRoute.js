import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getIsAuthenticated } from '../redux/selectors';
import { fetchContact } from 'redux/operations';

export const PrivateRoute = () => {
  const isAuth = useSelector(getIsAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchContact());
    }
  }, [isAuth, dispatch]);

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};
