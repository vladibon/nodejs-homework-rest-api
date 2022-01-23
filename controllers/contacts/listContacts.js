const contacts = require('../../models/contacts');

const listContacts = async (req, res, next) => {
  try {
    res.json(await contacts.listContacts());
  } catch (error) {
    next(error);
  }
};

module.exports = listContacts;
