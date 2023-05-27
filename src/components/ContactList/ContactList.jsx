import React from 'react';
import { useSelector } from 'react-redux';

import { selectAllContacts } from 'redux/contacts/selectors';
import { useFilter } from 'hooks/useFilter';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const { filter } = useFilter();

  const filteredContacts = React.useMemo(
    () =>
      contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      ),
    [contacts, filter]
  );

  return (
    <List>
      {filteredContacts.map(({ id, number, name }) => (
        <ContactItem key={id} id={id} number={number} name={name} />
      ))}
    </List>
  );
};

export default ContactList;
