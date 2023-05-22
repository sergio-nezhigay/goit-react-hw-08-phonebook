import { useFavicon, useTitle } from 'react-use';

import { Filler } from './App.styled';
import {
  ContactList,
  ContactForm,
  Section,
  Filter,
  Loader,
  Container,
} from 'components';

import addressIcon from '../../assets/images/icons8-address-book-32.png';
import { useFetchContactsQuery } from 'redux/contacts/contactsAPI';

export function App() {
  useTitle('Phonebook');
  useFavicon(addressIcon);
  const { data: contacts = [] } = useFetchContactsQuery();

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Loader />
      {contacts.length ? (
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      ) : (
        <Filler></Filler>
      )}
    </Container>
  );
}
