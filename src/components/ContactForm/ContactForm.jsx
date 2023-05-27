import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field } from 'formik';
import { object, string } from 'yup';
import { TextField, Button, Box } from '@mui/material';

import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactsAPI';
import { FormContainer, RowContainer } from './ContactForm.styled';

const numberRegex =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberMessage = `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`;
const nameMessage = `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`;

const schema = object({
  name: string().matches(nameRegex, nameMessage).required(),
  number: string().matches(numberRegex, numberMessage).required(),
});

const CustomTextField = ({ name, label, placeholder }) => (
  <Field name={name}>
    {({ field, meta }) => (
      <Box>
        <TextField
          {...field}
          label={label}
          fullWidth
          placeholder={placeholder}
          error={meta.touched && meta.error}
          helperText={meta.touched && meta.error ? meta.error : ''}
        />
      </Box>
    )}
  </Field>
);

export function ContactForm() {
  const { data: contacts = [] } = useFetchContactsQuery();
  const [addContact] = useAddContactMutation();

  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    if (
      contacts.some(contact =>
        contact.name.toLowerCase().includes(name.toLowerCase())
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormContainer>
        <RowContainer>
          <CustomTextField
            name="name"
            label="Name"
            placeholder="Enter the name"
          />
          <CustomTextField
            name="number"
            label="Number"
            placeholder="Enter the number"
          />
        </RowContainer>
        <Button variant="contained" type="submit">
          Add Contact
        </Button>
      </FormContainer>
    </Formik>
  );
}
