const CreateError = require('http-errors');
const contacts = require('../../models/contacts');
const { contactSchema } = require('../../schemas');

const addContact = async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);

    if (error) throw new CreateError.BadRequest(error.message);

    res.status(201).json(await contacts.addContact(req.body));
  } catch (error) {
    next(error);
  }
};

module.exports = addContact;
