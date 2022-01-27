const { NotFound } = require('http-errors');
const { Contact } = require('../../models');

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);

  if (!result) throw new NotFound(`Contact with id=${contactId} not found`);

  res.json({ message: 'Contact deleted' });
};

module.exports = removeContact;
