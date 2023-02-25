export const getAllContacts = store => store.contacts;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts;
  }
  const normalizingFilter = filter.toLowerCase().trim();
  const result = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(normalizingFilter);
  });

  return result;
};
