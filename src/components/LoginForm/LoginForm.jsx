import { useDispatch } from 'react-redux';
import { TextField, Button, Typography } from '@mui/material';

import { logIn } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

import { Section } from 'components/Section/Section';
import { Form } from './Loginform.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { authError } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Section title="Login">
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Typography variant="h6" gutterBottom>
          Please, enter your data to login:
        </Typography>
        <TextField label="Email" type="email" name="email" />
        <TextField label="Password" type="password" name="password" />
        {authError && <Typography color="error">{authError}</Typography>}
        <Button type="submit" variant="contained">
          Log In
        </Button>
      </Form>
    </Section>
  );
};
