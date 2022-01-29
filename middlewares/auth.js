const { Unauthorized } = require('http-errors');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { SECRET_KEY } = process.env;

const auth = async (req, _, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');

  try {
    if (bearer !== 'Bearer') throw new Unauthorized('Not authorized');

    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);

    if (!user || user.token !== token) throw new Unauthorized('Not authorized');

    req.user = user;

    next();
  } catch (error) {
    if (error.message.includes('invalid') || error.message.includes('expired'))
      error.status = 401;

    next(error);
  }
};

module.exports = auth;
