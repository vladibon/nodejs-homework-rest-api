// const listContacts = async () => {};
// const getContactById = async contactId => {};
// const removeContact = async contactId => {};
// const addContact = async body => {};
// const updateContact = async (contactId, body) => {};

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// };

const fs = require('fs/promises');
const { nanoid } = require('nanoid');

const contactsPath = require('path').join(__dirname, 'contacts.json');

const listContacts = async () => JSON.parse(await fs.readFile(contactsPath));

const getContactById = async contactId => {
  const contacts = await listContacts();
  return contacts.find(({ id }) => id === contactId) || null;
};

const addContact = async ({ name, email, phone }) => {
  const newContact = { id: nanoid(8), name, email, phone };
  const contacts = await listContacts();

  contacts.push(newContact);
  await writeContactsToFile(contacts);
  return newContact;
};

const removeContact = async contactId => {
  const contacts = await listContacts();
  const idx = contacts.findIndex(({ id }) => id === contactId);

  if (idx === -1) return null;

  const [removedContact] = contacts.splice(idx, 1);
  await writeContactsToFile(contacts);
  return removedContact;
};

const updateContact = async (contactId, { name, email, phone }) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex(({ id }) => id === contactId);

  if (idx === -1) return null;

  contacts[idx] = { id: contactId, name, email, phone };
  await writeContactsToFile(contacts);
  return contacts[idx];
};

const writeContactsToFile = async contacts =>
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
};
