const router = require("express").Router();
const Middlewares = require("../../middlewares/middlerwares");
const Controllers = require("../../controllers/controllers");

router.post("/", [Middlewares.verifyToken], Controllers.LikePost.likePost);

module.exports = router;
