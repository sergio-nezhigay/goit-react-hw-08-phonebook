import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from 'redux/contacts/operations';

import { Li, Button, Text } from './ContactItem.styled';

export function ContactItem({ id, number, name }) {
  const dispatch = useDispatch();
  const [isEditMode, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);

  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  const handleUpdate = () => {
    const updatedContact = {
      id,
      name: editedName,
      number: editedNumber,
    };
    dispatch(updateContact(updatedContact));
    setEditing(false);
  };

  return (
    <Li>
      {isEditMode ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={e => setEditedName(e.target.value)}
          />
          <input
            type="text"
            value={editedNumber}
            onChange={e => setEditedNumber(e.target.value)}
          />
          <button onClick={handleUpdate} type="button">
            Update
          </button>
          <button onClick={() => setEditing(false)} type="button">
            Cancel
          </button>
        </>
      ) : (
        <>
          <Text>
            {name}: {number}
          </Text>
          <Button onClick={() => setEditing(true)} type="button">
            Edit
          </Button>
          <Button onClick={onDelete} type="button">
            Delete
          </Button>
        </>
      )}
    </Li>
  );
}
