import { useSelector, useDispatch } from 'react-redux';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contacts-slice';

import ContactItem from 'components/ContactItem/ContactItem';

import { StyledContactList } from './ContactList.styled';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <StyledContactList>
      {filteredContacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            contact={contact}
            deleteContact={handleDeleteContact}
          ></ContactItem>
        );
      })}
    </StyledContactList>
  );
};

export default ContactList;
