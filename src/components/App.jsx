import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contactsSlice';
import {
  selectError,
  selectFilter,
  selectIsLoading,
  selectItems,
} from 'redux/selectors';

import {
  addContactThunk,
  deleteContactThunk,
  fetchContactThunk,
} from 'redux/contactsThunk';
import Loader from './Loader/Loader';
import { Section } from './WraperStyled';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import Contacts from './Contacts/Contacts';

export default function App() {
  const items = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactThunk());
  }, [dispatch]);

  const formAddContact = contactData => {
    const search = items.find(contact => contact.name === contactData.name);
    if (search) {
      alert(`${contactData.name} is already in Contacts`);
      return;
    }
    dispatch(addContactThunk(contactData));
  };

  const handleOnChangeFilter = event => {
    dispatch(filterContact(event.currentTarget.value));
  };

  const normalize = filter ? filter.toLowerCase() : '';
  const findContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalize)
  );

  const onRemoveContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  return (
    <>
      <Section>
        <h1>PhoneBook</h1>

        <Form formAddContact={formAddContact} contactsArray={items} />
        <h2>Contacts</h2>
        <Filter value={filter} handleOnChangeFilter={handleOnChangeFilter} />

        {isLoading && <Loader />}
        {error && <p>{error}</p>}

        <Contacts
          findContacts={findContacts}
          onRemoveContact={onRemoveContact}
          value={filter}
          handleOnChangeFilter={handleOnChangeFilter}
        />
      </Section>
    </>
  );
}
