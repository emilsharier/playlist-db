const Controllers = require("../../controllers/controllers");
const Middlewares = require("../../middlewares/middlerwares");

const router = require("express").Router();

router.post(
  "/",
  [Middlewares.verifyToken],
  Controllers.MicroServices.followUser
),
  (module.exports = { router });
