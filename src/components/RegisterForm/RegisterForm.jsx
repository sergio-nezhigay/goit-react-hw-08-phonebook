import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { TextField, Button, Typography } from '@mui/material';

import { Section } from 'components/Section/Section';

import { Form } from './RegisterForm.styled';
import { useAuth } from 'hooks/useAuth';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { authError } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Section title="Submit">
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Typography variant="h6">Please, enter your data to submit:</Typography>
        <TextField label="Username" type="text" name="name" />
        <TextField label="Email" type="email" name="email" />
        <TextField label="Password" type="password" name="password" />
        {authError && <Typography color="error">{authError}</Typography>}
        <Button type="submit" variant="contained">
          Register
        </Button>
      </Form>
    </Section>
  );
};
