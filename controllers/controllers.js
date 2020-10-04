const Read = require("./read_controller");
const ReadAll = require("./read_all_controller");
const AuthController = require("./authentication_controller/auth_controller");
const NewPost = require("./new_post_controller");
const LikePost = require("./like_post_controller");
const EditPost = require("./post_controllers/edit_post_controller");
const FollowUser = require("./micro services/follow_user");
const FollowStatus = require("./micro services/follow_status");

module.exports = {
  Read,
  ReadAll,
  AuthController,
  NewPost,
  LikePost,
  EditPost,
  FollowUser,
  FollowStatus,
};
