const { Conflict } = require('http-errors');
const { User } = require('../../models');

const signup = async ({ body }, res) => {
  const { email, password } = body;

  if (await User.findOne({ email }))
    throw new Conflict(`User with email:${email} already exist`);

  const user = await new User({ email }).setPassword(password).save();

  res.status(201).json({
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};

module.exports = signup;
