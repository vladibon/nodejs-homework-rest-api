const express = require('express');

const { auth, upload, validation, ctrlWrapper } = require('../../middlewares');
const { joiSchema, subscriptionJoiSchema } = require('../../models/user');
const { users: ctrl } = require('../../controllers');

const router = express.Router();

router.patch(
  '/',
  auth,
  validation(subscriptionJoiSchema),
  ctrlWrapper(ctrl.updateSubscription),
);

router.post('/signup', validation(joiSchema), ctrlWrapper(ctrl.signup));

router.post('/login', validation(joiSchema), ctrlWrapper(ctrl.login));

router.get('/logout', auth, ctrlWrapper(ctrl.logout));

router.get('/current', auth, ctrlWrapper(ctrl.getCurrent));

router.patch(
  '/avatars',
  [auth, upload.single('avatar')],
  ctrlWrapper(ctrl.updateAvatar),
);

module.exports = router;
