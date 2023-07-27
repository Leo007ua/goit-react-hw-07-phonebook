import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, filterContact } from 'redux/contactsSlice';

import { Section } from './WraperStyled';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import Contacts from './Contacts/Contacts';

export default function App() {
  const { contacts, filter } = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const formAddContact = contactData => {
    const search = contacts.find(contact => contact.name === contactData.name);
    if (search) {
      alert(`${contactData.name} is already in Contacts`);
      return;
    }
    dispatch(addContact(contactData));
  };

  const handleOnChangeFilter = event => {
    dispatch(filterContact(event.currentTarget.value));
  };

  const normalize = filter ? filter.toLowerCase() : '';
  const findContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalize)
  );

  const onRemoveContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <Section>
        <h1>PhoneBook</h1>

        <Form formAddContact={formAddContact} contactsArray={contacts} />
        <h2>Contacts</h2>
        <Filter value={filter} handleOnChangeFilter={handleOnChangeFilter} />
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
