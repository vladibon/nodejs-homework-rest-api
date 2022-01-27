const { BadRequest } = require('http-errors');

const validation =
  schema =>
  ({ body }, _, next) => {
    const { error } = schema.validate(body);

    if (error) throw new BadRequest(error.message);

    next();
  };

module.exports = validation;
