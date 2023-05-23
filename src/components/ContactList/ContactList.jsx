import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
// import { filterSelectors } from 'redux/filter';
import { List, Li, DeleteButton, Text } from './ContactList.styled';
import { selectAllContacts } from 'redux/contacts/selectors';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const onDelete = id => {
    console.log('🚀 ~ file: ContactList.jsx:17 ~ onDelete ~ id:', id);
    dispatch(deleteContact(id));
  };

  //   const filter = useSelector(filterSelectors.selectFilter);
  //   const filteredContacts = contacts.filter(({ name }) => name.includes(filter));

  return (
    <List>
      {contacts.map(({ id, number, name }) => {
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
