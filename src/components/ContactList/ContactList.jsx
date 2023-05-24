import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import { List, Li, DeleteButton, Text } from './ContactList.styled';
import { selectAllContacts } from 'redux/contacts/selectors';
import { useFilter } from 'hooks/useFilter';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const onDelete = id => {
    dispatch(deleteContact(id));
  };
  const { filter } = useFilter();
  const filteredContacts = contacts.filter(({ name }) => name.includes(filter));

  return (
    <List>
      {filteredContacts.map(({ id, number, name }) => {
        return (
          <Li key={id}>
            <Text>
              {name}: {number}
            </Text>
            <DeleteButton onClick={() => onDelete(id)} type="button">
              Delete
            </DeleteButton>
          </Li>
        );
      })}
    </List>
  );
}

export default ContactList;
