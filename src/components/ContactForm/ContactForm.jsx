import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import { object, string } from 'yup';
import { TextField, Button, Box } from '@mui/material';

import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactsAPI';
import {
  FormContainer,
  RowContainer,
  ErrorContainer,
} from './ContactForm.styled';

const numberRegex =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberMessage = `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`;
const nameMessage = `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`;

const schema = object({
  name: string().matches(nameRegex, nameMessage).required(),
  phone: string().matches(numberRegex, numberMessage).required(),
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
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (values, { resetForm }) => {
    const { name, phone } = values;
    if (
      contacts.some(contact =>
        contact.name.toLowerCase().includes(name.toLowerCase())
      )
    ) {
      setErrorMessage(
        `${name} is already in contacts. You can edit data in table below...`
      );
      return;
    }
    try {
      setErrorMessage(``);
      await addContact({ name, phone }).unwrap();
      resetForm();
    } catch (err) {
      console.error('Failed to save the post: ', err);
    }
  };

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
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
            name="phone"
            label="Phone number"
            placeholder="Enter the phone"
          />
        </RowContainer>
        {errorMessage && <ErrorContainer>{errorMessage}</ErrorContainer>}
        <Button variant="contained" type="submit">
          Add Contact
        </Button>
      </FormContainer>
    </Formik>
  );
}
