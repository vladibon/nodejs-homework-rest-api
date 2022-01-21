const express = require('express');
const CreateError = require('http-errors');
const Joi = require('joi');
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require('../../models/contacts');

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    res.json(await listContacts());
  } catch (error) {
    next(error);
  }
});

router.get('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await getContactById(contactId);

    if (!result) throw new CreateError.NotFound();

    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);

    if (error) throw new CreateError.BadRequest(error.message);

    res.status(201).json(await addContact(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;

    if (!(await removeContact(contactId))) throw new CreateError.NotFound();

    res.json({ message: 'Contact deleted' });
  } catch (error) {
    next(error);
  }
});

router.put('/:contactId', async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);

    if (error) throw new CreateError.BadRequest(error.message);

    const { contactId } = req.params;
    const result = await updateContact(contactId, req.body);

    if (!result) throw new CreateError.NotFound();

    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
