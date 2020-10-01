module.exports = (app) => {
  app.use("/read", require("./read"));
  app.use("/readAll", require("./read_all"));
  app.use("/signin", require("./auth_routes/sign_in"));
  app.use("/signup", require("./auth_routes/sign_up"));
  app.use("/newPost", require("./posts_routes/new_post"));
};