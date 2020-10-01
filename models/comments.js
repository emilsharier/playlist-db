const Joi = require("joi");

const Comments = Joi.object({
  comment_id: Joi.string().required(),
  uid: Joi.string().required(),
  comment: Joi.string().required(),
});

module.exports = Comments;
