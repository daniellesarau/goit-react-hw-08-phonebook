import { Box, Link } from '@mui/material';
import LockOpenSharpIcon from '@mui/icons-material/LockOpenSharp';
import LoginIcon from '@mui/icons-material/Login';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Link
          component={NavLink}
          to="/register"
          variant="h6"
          color={'#ffc300'}
          sx={{
            padding: 3,
            fontWeight: 700,
            textDecoration: 'none',
            color: '#ffffff',
            '&:hover': {
              color: 'rgb(192,215,221)',
            },
          }}
        >
          <LockOpenSharpIcon
            sx={{
              paddingTop: '5px',
              paddingRight: '5px',
            }}
          />{' '}
          REGISTER
        </Link>

        <Link
          component={NavLink}
          to="/login"
          variant="h6"
          color={'#ffc300'}
          sx={{
            padding: 3,
            fontWeight: 700,
            textDecoration: 'none',
            color: '#ffffff',
            alignContent: 'center',
            '&:hover': {
              color: 'rgb(192,215,221)',
            },
          }}
        >
          <LoginIcon
            sx={{
              paddingTop: '5px',
              paddingRight: '5px',
            }}
          />
          LOGIN
        </Link>
      </Box>
    </>
  );
}
