import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  useDeleteContactMutation,
  useUpdateContactMutation,
} from 'redux/contacts/contactsAPI';

import { TextField, Button, Typography } from '@mui/material';

import { StyledBox, StyledButton } from './ContactItem.styled';

export function ContactItem({ id, phone, name }) {
  const dispatch = useDispatch();
  const [isEditMode, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(phone);
  const [deleteContact] = useDeleteContactMutation();
  const [updateContact] = useUpdateContactMutation();
  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  const handleUpdate = async () => {
    const updatedContact = {
      id,
      name: editedName,
      phone: editedNumber,
    };
    try {
      await updateContact(updatedContact).unwrap();
      setEditing(false);
    } catch (err) {
      console.error('Failed to save the post: ', err);
    }
  };

  return (
    <li>
      {isEditMode ? (
        <>
          <StyledBox>
            <TextField
              type="text"
              focused
              value={editedName}
              variant="standard"
              onChange={e => setEditedName(e.target.value)}
            />
            <TextField
              type="text"
              focused
              value={editedNumber}
              variant="standard"
              onChange={e => setEditedNumber(e.target.value)}
            />
            <StyledButton
              onClick={handleUpdate}
              variant="contained"
              color="success"
            >
              Update
            </StyledButton>
            <Button
              sx={{
                minWidth: '7rem',
              }}
              onClick={() => setEditing(false)}
              variant="contained"
              color="error"
            >
              Cancel
            </Button>
          </StyledBox>
        </>
      ) : (
        <StyledBox>
          <Typography
            sx={{
              fontWeight: 'bold',
            }}
          >
            {`${name}: `}
          </Typography>
          <Typography>{phone}</Typography>
          <StyledButton onClick={() => setEditing(true)} variant="contained">
            Edit
          </StyledButton>
          <Button
            sx={{
              minWidth: '7rem',
            }}
            onClick={onDelete}
            variant="contained"
          >
            Delete
          </Button>
        </StyledBox>
      )}
    </li>
  );
}
