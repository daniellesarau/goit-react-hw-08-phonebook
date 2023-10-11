import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Button,
  Box,
  CssBaseline,
  TextField,
  Typography,
  Link,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { register } from 'redux/operations';
import { useState } from 'react';

import { getIsAuthenticated } from 'redux/selectors';

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      sx={{ paddingTop: ' 130px' }}
    >
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://github.com/daniellesarau/goit-react-hw-08-phonebook"
      >
        Daniela S
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector(getIsAuthenticated);

  const handleChangeInput = event => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'name') {
      setName(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ email: email, password: password, name: name }));
  };

  useEffect(() => {
    if (isAuth) navigate('/contacts');
  }, [isAuth, navigate]);

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          maxWidth: '600px',
          mt: 10,
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 20px',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'blue' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 1, width: '100%' }}
        >
          <TextField
            margin="normal"
            fullWidth
            label="Name"
            name="name"
            type="text"
            autoFocus
            autoComplete="current-name"
            onChange={handleChangeInput}
          />
          <TextField
            autoComplete="current-email"
            margin="normal"
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            autoFocus
            onChange={handleChangeInput}
          />
          <TextField
            autoComplete="current-password"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            onChange={handleChangeInput}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </>
  );
};
