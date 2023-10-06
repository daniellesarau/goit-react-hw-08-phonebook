import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/selectors';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import { Box, Link } from '@mui/material';

export const UserNavigation = () => {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <>
      <Box>
        <Link
          component={NavLink}
          to="/home"
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
          <HomeSharpIcon
            sx={{
              paddingTop: '7px',
            }}
          />
          HOME
        </Link>

        {isLoggedIn && (
          <Link
            component={NavLink}
            to="/contacts"
            variant="h6"
            underline="hover"
            sx={{
              padding: 3,
              fontWeight: 700,
              textDecoration: 'none',
              color: '#ffffff',
            }}
          >
            CONTACTS
          </Link>
        )}
      </Box>
    </>
  );
};
