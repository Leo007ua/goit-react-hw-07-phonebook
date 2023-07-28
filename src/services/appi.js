import axios from 'axios';

const instance = axios.create({
  baseURL: `https://64c33b5aeb7fd5d6ebd0a253.mockapi.io/contacts`,
});

export const getContact = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const postContact = async (contact) => {
  const { data } = await instance.post('/contacts',contact);
  return data;
}

export const deleteContact = async (id) => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};