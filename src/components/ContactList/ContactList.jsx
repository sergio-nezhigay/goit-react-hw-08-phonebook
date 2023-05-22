import React from 'react';
import { useSelector } from 'react-redux';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/contacts/contactsAPI';

import { filterSelectors } from 'redux/filter';
import { List, Li, DeleteButton, Text } from './ContactList.styled';

export function ContactList() {
  const { data: contacts = [] } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const onDelete = id => {
    console.log('🚀 ~ file: ContactList.jsx:17 ~ onDelete ~ id:', id);
    deleteContact(id);
  };

  const filter = useSelector(filterSelectors.selectFilter);
  const filteredContacts = contacts.filter(({ name }) => name.includes(filter));

  return (
    <List>
      {filteredContacts.map(({ id, phone, name }) => {
        return (
          <Li key={id}>
            <Text>
              {name}: {phone}
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
