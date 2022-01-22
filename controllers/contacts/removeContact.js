const CreateError = require('http-errors');
const contacts = require('../../models/contacts');

const removeContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    if (!(await contacts.removeContact(contactId)))
      throw new CreateError.NotFound();

    res.json({ message: 'Contact deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = removeContact;
