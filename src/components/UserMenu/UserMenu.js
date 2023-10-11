import { useDispatch } from 'react-redux';
import { logout } from 'redux/operations';
import { NavLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';

import { BiExit } from 'react-icons/bi';

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <Box display="flex" alignItems="center">
      <Link
        component={NavLink}
        to="/"
        variant="h6"
        type="button"
        onClick={() => dispatch(logout())}
        color={'#ffc300'}
        sx={{
          padding: 1,
          fontWeight: 700,
          textDecoration: 'none',
          color: '#ffffff',

          '&:hover': {
            color: 'rgb(192,215,221)',
          },
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        LOGOUT
        <BiExit sx={{ marginLeft: '0.5rem' }} />
      </Link>
    </Box>
  );
};
