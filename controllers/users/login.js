const { Unauthorized } = require('http-errors');
const { User } = require('../../models');

const login = async ({ body }, res) => {
  const { email, password } = body;

  const user = await User.findOne({ email });

  if (!user || !user?.comparePassword(password))
    throw new Unauthorized(`Email or password is wrong`);

  user.setToken(user._id).save();

  res.json({
    token: user.token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};

module.exports = login;
