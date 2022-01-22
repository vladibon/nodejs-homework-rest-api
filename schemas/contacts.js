const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  phone: Joi.string()
    .pattern(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})?([0-9]{4})/)
    .required(),
});

module.exports = contactSchema;
