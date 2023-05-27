import { Link } from './AuthNav.styled';
import { Button, Box } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box>
      <Button color="inherit" component={Link} to="/login">
        Log In
      </Button>
      <Button color="inherit" component={Link} to="/register">
        Register
      </Button>
    </Box>
  );
};
