const { createAsyncThunk } = require('@reduxjs/toolkit');
const { getContact, postContact, deleteContact } = require('services/appi');

export const fetchContactThunk = createAsyncThunk('contacts/fetchAll', () =>
  getContact()
);
export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  contact => postContact(contact)
);
export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => deleteContact(id)
);
