import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../redux/selectors';

export const PublicRoute = ({ component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
