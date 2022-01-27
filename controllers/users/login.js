const { Unauthorized } = require('http-errors');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');

const { SECRET_KEY } = process.env;

const login = async ({ body }, res) => {
  const { email, password } = body;

  const user = await User.findOne({ email });

  if (!user || !user?.comparePassword(password))
    throw new Unauthorized(`Email or password is wrong`);

  const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h' });

  res.json({
    token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};

module.exports = login;
