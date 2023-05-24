import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import { useFilter } from 'hooks/useFilter';

import { List } from './ContactList.styled';

import { ContactItem } from 'components/ContactItem/ContactItem';

function ContactList() {
  const contacts = useSelector(selectAllContacts);
  const { filter } = useFilter();
  const filteredContacts = contacts.filter(({ name }) => name.includes(filter));

  return (
    <List>
      {filteredContacts.map(({ id, number, name }) => (
        <ContactItem key={id} id={id} number={number} name={name} />
      ))}
    </List>
  );
}

export default ContactList;
