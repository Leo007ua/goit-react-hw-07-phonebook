import PropTypes from 'prop-types';
import { ContactsDivStyled } from './ContactsStyled';
import ContactItem from 'components/ContactItem/ContactItem';

function Contacts({ findContacts, onRemoveContact }) {
  return (
    <>
      <ContactsDivStyled>
        {findContacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onRemoveContact={onRemoveContact}
            />
          );
        })}
      </ContactsDivStyled>
    </>
  );
}

Contacts.propTypes = {
  findContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default Contacts;
