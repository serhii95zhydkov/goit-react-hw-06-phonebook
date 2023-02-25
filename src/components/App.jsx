import { useSelector, useDispatch } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';

import {
  getAllContacts,
  getFilteredContacts,
} from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

const App = () => {
  const allContacts = useSelector(getAllContacts);

  const filteredContacts = useSelector(getFilteredContacts);

  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const isDublicate = contactName => {
    const normalizingName = contactName.toLowerCase();
    const result = allContacts.find(({ name }) => {
      return name.toLowerCase() === normalizingName;
    });
    return Boolean(result);
  };

  const handleAddContact = ({ name, number }) => {
    if (isDublicate(name)) {
      alert(`${name} is already in contacts.`);
      return false;
    }
    dispatch(addContact({ name, number }));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilter} />
      <ContactList
        deleteContact={handleDeleteContact}
        items={filteredContacts}
      />
    </>
  );
};

export default App;
