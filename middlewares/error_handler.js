const error_handler = (err, req, res, next) => {
  console.log("Ran into some error 😢");
  console.log(err);
  return res.json({ message: err });
};

module.exports = { error_handler };
