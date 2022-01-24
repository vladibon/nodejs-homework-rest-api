const { Contact } = require('../../models');

const addContact = async ({ body }, res) => {
  res.status(201).json(await Contact.create(body));
};

module.exports = addContact;
