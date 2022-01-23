const { BadRequest } = require('http-errors');
const { Contact } = require('../../models');
const { contactSchema } = require('../../schemas');

const addContact = async ({ body }, res) => {
  const { error } = contactSchema.validate(body);

  if (error) throw new BadRequest(error.message);

  res.status(201).json(await Contact.create(body));
};

module.exports = addContact;
