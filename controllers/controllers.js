const AuthController = require("./authentication_controller/auth_controller");
const NewPost = require("./post_controllers/new_post_controller");
const LikePost = require("./post_controllers/like_post_controller");
const EditPost = require("./post_controllers/edit_post_controller");
const FollowUser = require("./micro services/follow_user");
const FollowStatus = require("./micro services/follow_status");
const TrendingPosts = require("./feed_controllers/trending_feed_controller");
const UserFeed = require("./feed_controllers/get_user_feed");

module.exports = {
  AuthController,
  NewPost,
  LikePost,
  EditPost,
  FollowUser,
  FollowStatus,
  TrendingPosts,
  UserFeed,
};
