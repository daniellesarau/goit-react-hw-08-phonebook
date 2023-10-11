import {
  AppBar,
  Container,
  LinearProgress,
  Toolbar,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import AuthNavigation from 'components/AuthNavigation/AuthNavihation';
import { UserNavigation } from 'components/UserNavigation/UserNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getIsAuthenticated } from 'redux/selectors';
const Layout = () => {
  const theme = useTheme();
  const isLoggedIn = useSelector(getIsAuthenticated);
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        minWidth: '1485px',
        margin: '0 auto',
      }}
    >
      <AppBar
        position="static"
        sx={{
          height: 80,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container fixed>
          <Toolbar
            variant="dense"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {!isSmallerScreen && <UserNavigation />}
            {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Suspense fallback={<LinearProgress variant="indeterminate" />}>
          <Outlet />
        </Suspense>
      </main>
    </Box>
  );
};

export default Layout;
