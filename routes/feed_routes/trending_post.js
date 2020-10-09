const router = require("express").Router();
const Controller = require("../../controllers/controllers");
const Middlewarres = require("../../middlewares/middlerwares");

router.post(
  "/",
  [Middlewarres.verifyToken],
  Controller.TrendingPosts.getTrendingPosts
);

module.exports = router;
