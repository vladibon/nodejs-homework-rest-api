const CreateError = require('http-errors');
const contacts = require('../../models/contacts');
const { contactSchema } = require('../../schemas');

const updateContact = async ({ params: { contactId }, body }, res, next) => {
  try {
    const { error } = contactSchema.validate(body);

    if (error) throw new CreateError.BadRequest(error.message);

    const result = await contacts.updateContact(contactId, body);

    if (!result) throw new CreateError.NotFound();

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateContact;
