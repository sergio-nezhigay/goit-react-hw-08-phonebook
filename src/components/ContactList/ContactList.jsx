import React from 'react';
import { useFetchContactsQuery } from 'redux/contacts/contactsAPI';

import { useFilter } from 'hooks/useFilter';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const { data: contacts = [] } = useFetchContactsQuery();
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
      {filteredContacts.map(({ _id: id, phone, name }) => (
        <ContactItem key={id} id={id} phone={phone} name={name} />
      ))}
    </List>
  );
};

export default ContactList;
