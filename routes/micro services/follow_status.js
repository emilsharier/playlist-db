const router = require("express").Router();
const Controllers = require("../../controllers/controllers");
const Middlewares = require("../../middlewares/middlerwares");

router.post(
  "/",
  [Middlewares.verifyToken],
  Controllers.FollowStatus.followStatus
);

module.exports = router;
