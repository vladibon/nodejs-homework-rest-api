const { NotFound } = require('http-errors');
const { Contact } = require('../../models');

const getContactById = async ({ params: { contactId } }, res) => {
  const result = await Contact.findById(contactId);

  if (!result) throw new NotFound();

  res.json(result);
};

module.exports = getContactById;
