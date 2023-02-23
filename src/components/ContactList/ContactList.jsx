import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';

import { StyledContactList } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <StyledContactList>
      {contacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          ></ContactItem>
        );
      })}
    </StyledContactList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape(PropTypes.string.isRequired).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
