const CreateError = require('http-errors');
const contacts = require('../../models/contacts');

const removeContact = async (req, res) => {
  const { contactId } = req.params;

  if (!(await contacts.removeContact(contactId)))
    throw new CreateError.NotFound();

  res.json({ message: 'Contact deleted' });
};

module.exports = removeContact;
