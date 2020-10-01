const Joi = require("joi");

const Posts = Joi.object({
  post_id: Joi.string().required(),
  uid: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().require(),
  genres: Joi.array().required(),
  likes: Joi.number().default(0),
  comments: Joi.array(),
});

module.exports = Posts;
