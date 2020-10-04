module.exports = (app) => {
  app.use("/signin", require("./auth_routes/sign_in"));
  app.use("/signup", require("./auth_routes/sign_up"));
  app.use("/newPost", require("./posts_routes/new_post"));
  app.use("/likePost", require("./posts_routes/like_post"));
  app.use("/editPost", require("./posts_routes/edit_post"));
  app.use("/followStatus", require("./micro services/follow_status"));
};
