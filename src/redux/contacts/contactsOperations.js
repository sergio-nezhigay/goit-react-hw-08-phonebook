import { createAsyncThunk } from '@reduxjs/toolkit';

import * as mockAPI from 'services/mockAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await mockAPI.fetchContacts();
      return contacts;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const resultId = await mockAPI.deleteContact(contactId);
      return resultId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const result = await mockAPI.addContact(contact);
      return result;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
