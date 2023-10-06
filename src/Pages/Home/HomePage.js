import { NavLink } from 'react-router-dom';
import { Box, Link, Typography } from '@mui/material';
import { getIsAuthenticated } from 'redux/selectors';
import { useSelector } from 'react-redux';
export default function HomePage() {
  const isLoggIn = useSelector(getIsAuthenticated);
  return (
    <>
      <Box sx={{ textAlign: 'center', marginTop: '200px' }}>
        <Typography variant="h2" align="center" sx={{ mt: 15, mb: 10 }}>
          Your personal phonebook
          <br /> welcomes you!
        </Typography>
        <Link
          component={NavLink}
          to={isLoggIn ? '/contacts' : '/login'}
          variant="h5"
          underline="none"
          sx={{
            paddingY: 3,
            paddingX: 5,
            color: '#ffffff',
            backgroundColor: '#1976d2',
            fontSize: '25px',
            fontWeight: 700,
            textDecoration: 'none',
            border: 1,
            borderRadius: 5,
            '&:hover': {
              backgroundColor: '#ffffff',
              color: '#1976d2',
              border: 1,
            },
          }}
        >
          Get started
        </Link>
      </Box>
    </>
  );
}
