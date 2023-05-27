import { Helmet } from 'react-helmet';
import { Section } from 'components/Section/Section';

import { useFetchContactsQuery } from 'redux/contacts/contactsAPI';

import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function ContactsPage() {
  const { isLoading } = useFetchContactsQuery();

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <div>{isLoading && 'Request in progress...'}</div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}
