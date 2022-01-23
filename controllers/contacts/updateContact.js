const { BadRequest, NotFound } = require('http-errors');
const { Contact } = require('../../models');
const { contactSchema } = require('../../schemas');

const updateContact = async ({ params: { contactId }, body }, res) => {
  const { error } = contactSchema.validate(body);

  if (error) throw new BadRequest(error.message);

  const result = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });

  if (!result) throw new NotFound(`Contact with id=${contactId} not found`);

  res.json(result);
};

module.exports = updateContact;
