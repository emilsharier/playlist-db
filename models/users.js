const Joi = require("joi");

const Users = Joi.object({
  username: Joi.string().required(),
  name: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().email(),
  password: Joi.string().required(),
  followers: Joi.array().default([""]),
  following: Joi.array().default([""]),
});

module.exports = Users;
