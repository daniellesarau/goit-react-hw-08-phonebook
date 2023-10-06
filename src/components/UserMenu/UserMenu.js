import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/operations';

import { Box, Button, Typography } from '@mui/material';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.name);

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
        <ExitToAppOutlinedIcon sx={{ paddingTop: '7px' }} />
        Logout
      </Button>
    </Box>
  );
};
