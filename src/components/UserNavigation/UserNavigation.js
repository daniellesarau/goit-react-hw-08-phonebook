import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/selectors';
import { Box, Link } from '@mui/material';
import { BiSolidContact } from 'react-icons/bi';
import { BiHome } from 'react-icons/bi';

export const UserNavigation = () => {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Link
          component={NavLink}
          to="/"
          variant="h6"
          color={'#ffc300'}
          sx={{
            padding: 3,
            fontWeight: 700,
            textDecoration: 'none',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',

            '&:hover': {
              color: 'rgb(192,215,221)',
            },
          }}
        >
          <BiHome style={{ marginRight: '5px', marginBottom: '2px' }} />
          HOME
        </Link>

        {isLoggedIn && (
          <Link
            component={NavLink}
            to="/contacts"
            variant="h6"
            color={'#ffc300'}
            sx={{
              paddingLeft: '20px',
              padding: 3,
              fontWeight: 700,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              color: '#ffffff',
              '&:hover': {
                color: 'rgb(192,215,221)',
              },
            }}
          >
            <BiSolidContact style={{ marginRight: '5px' }} />
            CONTACTS
          </Link>
        )}
      </Box>
    </>
  );
};
