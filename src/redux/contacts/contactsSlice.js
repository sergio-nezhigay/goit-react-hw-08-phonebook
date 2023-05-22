import { createSlice } from '@reduxjs/toolkit';
import { batch } from 'react-redux';
import { fetchContacts, deleteContact, addContact } from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        batch(() => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
        });
      })
      .addCase(fetchContacts.pending, state => {
        batch(() => {
          state.isLoading = true;
          state.error = null;
        });
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        batch(() => {
          state.isLoading = false;
          state.error = action.payload;
        });
      })
      .addCase(addContact.fulfilled, (state, action) => {
        batch(() => {
          state.isLoading = false;
          const createdContact = action.payload;
          state.items.push(createdContact);
        });
      })
      .addCase(addContact.pending, state => {
        batch(() => {
          state.isLoading = true;
          state.error = null;
        });
      })
      .addCase(addContact.rejected, (state, action) => {
        batch(() => {
          state.isLoading = false;
          state.error = action.payload;
        });
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        batch(() => {
          state.isLoading = false;
          const deletedContactId = action.payload;
          state.items = state.items.filter(
            contact => contact.id !== deletedContactId
          );
        });
      })
      .addCase(deleteContact.pending, state => {
        batch(() => {
          state.isLoading = true;
          state.error = null;
        });
      })
      .addCase(deleteContact.rejected, (state, action) => {
        batch(() => {
          state.isLoading = false;
          state.error = action.payload;
        });
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
