import { Link } from './AuthNav.styled';
import Button from '@mui/material/Button';

export const AuthNav = () => {
  return (
    <div>
      <Button color="inherit" component={Link} to="/login">
        Log In
      </Button>
      <Button color="inherit" component={Link} to="/register">
        Register
      </Button>
    </div>
  );
};
