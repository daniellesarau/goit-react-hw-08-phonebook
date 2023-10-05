import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import '@fontsource/roboto/500.css';
import { NavLink } from 'react-router-dom';
import {
  Link,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  LinearProgress,
} from '@mui/material';

export default function Layout() {
  return (
    <Box>
      <AppBar>
        <Toolbar variant="dense">
          <Button variant="contained" sx={{ marginRight: 'auto ' }}>
            <Link
              sx={{ color: 'white' }}
              underline="none"
              component={NavLink}
              to="/home"
            >
              Home
            </Link>
          </Button>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '5px',
              marginLeft: '80px',
            }}
          >
            Phonebook
          </Typography>
          <Box
            sx={{
              display: 'flex',
              marginLeft: 'auto ',
              justifyContent: 'space-around',
            }}
          >
            <Button variant="contained">
              <Link
                sx={{ color: 'white' }}
                underline="none"
                component={NavLink}
                to="/register"
              >
                Register
              </Link>
            </Button>
            <Button variant="contained" sx={{ marginLeft: '30px' }}>
              <Link
                sx={{ color: 'white' }}
                underline="none"
                component={NavLink}
                to="/login"
              >
                Login
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <main>
        <Suspense fallback={<LinearProgress variant="indeterminate" />}>
          <Outlet />
        </Suspense>
      </main>
    </Box>
  );
}
