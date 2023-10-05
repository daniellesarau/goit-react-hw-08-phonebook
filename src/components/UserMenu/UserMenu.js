import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/operations';
import { getUserName } from 'redux/selectors';
import { Box, Button, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  return (
    <Box display="flex" alignItems="center">
      <Typography
        variant="h6"
        sx={{
          marginRight: '1rem',
        }}
      >
        Welcome, {userName}!
      </Typography>
      <Button
        variant="outlined"
        type="button"
        onClick={() => dispatch(logout())}
        sx={{
          color: 'primary',
          backgroundColor: '#ffffff',
          '&:hover': {
            backgroundColor: 'primary',
            color: '#ffffff',
            border: 1,
          },
        }}
      >
        Logout
      </Button>
    </Box>
  );
};
