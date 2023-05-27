import { AppBar, Toolbar, Container, Button, Box } from '@mui/material';

import { Link, Nav } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static" sx={{ mb: 3 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Nav>
            <Box sx={{ display: 'flex' }}>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              {isLoggedIn && (
                <Button color="inherit" component={Link} to="/contacts">
                  Contacts
                </Button>
              )}
            </Box>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
