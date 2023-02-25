import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllContacts } from 'redux/contacts/contacts-selectors';
import { addContact } from 'redux/contacts/contacts-slice';

import {
  StyledContactForm,
  StyledLabelForm,
  StyledInputForm,
  StyledButtonForm,
} from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const allContacts = useSelector(getAllContacts);

  const dispatch = useDispatch();

  const isDublicate = contactName => {
    const normalizingName = contactName.toLowerCase();
    const result = allContacts.find(({ name }) => {
      return name.toLowerCase() === normalizingName;
    });
    return Boolean(result);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (isDublicate(name)) {
      alert(`${name} is already in contacts.`);
      return false;
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <StyledContactForm onSubmit={handleSubmit}>
      <StyledLabelForm>
        Name
        <StyledInputForm
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </StyledLabelForm>
      <StyledLabelForm>
        Number
        <StyledInputForm
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </StyledLabelForm>
      <StyledButtonForm type="submit">Add contact</StyledButtonForm>
    </StyledContactForm>
  );
};

export default ContactForm;
