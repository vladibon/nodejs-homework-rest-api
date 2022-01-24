const { BadRequest } = require('http-errors');

const validation =
  schema =>
  ({ body }, res, next) => {
    const { error } = schema.validate(body);

    if (error) throw new BadRequest(error.message);

    next();
  };

module.exports = validation;
