// import { createSelector } from '@reduxjs/toolkit';
// import { selectFilter } from 'redux/filter/filterSelectors';

// export const selectContacts = state => state.contacts.items;
// export const getIsLoading = state => state.contacts.isLoading;
// export const getError = state => state.contacts.error;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     const filteredContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );

//     return filteredContacts.sort((a, b) => {
//       return b.id - a.id;
//     });
//   }
// );
