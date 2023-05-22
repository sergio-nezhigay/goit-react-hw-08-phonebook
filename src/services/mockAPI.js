import axios from 'axios';

axios.defaults.baseURL = 'https://6460b47ffe8d6fb29e35717a.mockapi.io/';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data?.id;
}

export async function addContact(contact) {
  const response = await axios.post(`/contacts/`, contact);
  return response.data;
}
