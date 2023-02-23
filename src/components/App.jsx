import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem('my-contacts'));
    return contacts ? contacts : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('my-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const isDublicate = contactName => {
    const normalizingName = contactName.toLowerCase();
    const result = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizingName;
    });
    return Boolean(result);
  };

  const formSubmitHandler = ({ name, number }) => {
    if (isDublicate(name)) {
      alert(`${name} is already in contacts.`);
      return false;
    }

    setContacts(prevState => {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return [newContact, ...prevState];
    });
    return true;
  };

  const getContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizingFilter = filter.toLowerCase().trim();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizingFilter);
    });

    return result;
  };

  const filteredContacts = getContacts();

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = ({ target }) => {
    setFilter(target.value);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </>
  );
};

export default App;
