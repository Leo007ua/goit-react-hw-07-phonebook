import axios from 'axios';

const instance = axios.create({
  baseURL: `https://64c33b5aeb7fd5d6ebd0a253.mockapi.io/contacts`,
});

export const getContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const postContacts = async () => {
  const { data } = await instance.post('/', contact);
  return data;
};

export const deleteContacts = async () => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};