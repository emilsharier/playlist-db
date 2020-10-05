const AuthController = require("./authentication_controller/auth_controller");
const NewPost = require("./post_controllers/new_post_controller");
const LikePost = require("./post_controllers/like_post_controller");
const EditPost = require("./post_controllers/edit_post_controller");
const FollowUser = require("./micro services/follow_user");
const FollowStatus = require("./micro services/follow_status");

module.exports = {
  AuthController,
  NewPost,
  LikePost,
  EditPost,
  FollowUser,
  FollowStatus,
};
