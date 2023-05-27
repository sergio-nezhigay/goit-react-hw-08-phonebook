import { useDispatch } from 'react-redux';
import { Button, Typography, Box } from '@mui/material';

import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 3 }}>
      <Typography>{user.email}</Typography>
      <Button
        color="inherit"
        type="button"
        sx={{
          '&:hover': {
            color: 'white',
            backgroundColor: 'orangered',
          },
        }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
