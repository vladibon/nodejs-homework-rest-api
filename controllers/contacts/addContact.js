const { Contact } = require('../../models');

const addContact = async (req, res) => {
  res.status(201).json(await Contact.create(req.body));
};

module.exports = addContact;
