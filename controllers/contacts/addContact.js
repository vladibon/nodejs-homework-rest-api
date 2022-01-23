// const CreateError = require('http-errors');
// const contacts = require('../../models/contacts');
const { Contact } = require('../../models');
// const { contactSchema } = require('../../schemas');

const addContact = async ({ body }, res) => {
  // const { error } = contactSchema.validate(body);

  // if (error) throw new CreateError.BadRequest(error.message);

  res.status(201).json(await Contact.create(body));
};

module.exports = addContact;
