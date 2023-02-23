import PropTypes from 'prop-types';

import {
  StyledItemContacts,
  StyledTextContacts,
  StyledButtonContacts,
} from './ContactItem.styled';

const ContactItem = ({ contact: { id, name, number }, deleteContact }) => {
  return (
    <StyledItemContacts>
      <StyledTextContacts>
        {name}: {number}
      </StyledTextContacts>
      <StyledButtonContacts onClick={() => deleteContact(id)} type="button">
        Delete
      </StyledButtonContacts>
    </StyledItemContacts>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
