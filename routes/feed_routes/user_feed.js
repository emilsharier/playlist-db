const router = require("express").Router();
const Controllers = require("../../controllers/controllers");
const Middlewares = require("../../middlewares/middlerwares");

router.get(
  "/:uid",
  [Middlewares.verifyToken],
  Controllers.UserFeed.getUserFeed
);

module.exports = router;
