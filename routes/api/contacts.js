const express = require('express');

const { ctrlWrapper } = require('../../middlewares');
const { contacts: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.listContacts));

router.get('/:contactId', ctrlWrapper(ctrl.getContactById));

router.post('/', ctrlWrapper(ctrl.addContact));

router.delete('/:contactId', ctrlWrapper(ctrl.removeContact));

router.put('/:contactId', ctrlWrapper(ctrl.updateContact));

module.exports = router;
