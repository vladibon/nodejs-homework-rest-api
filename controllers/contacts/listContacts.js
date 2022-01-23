const { Contact } = require('../../models');

const listContacts = async (_, res) => {
  res.json(await Contact.find({}));
};

module.exports = listContacts;
