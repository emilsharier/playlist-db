const models = require("../models/models");
const db = require("../DB/db").getDB();

const verifyEmail = async (req, res, next) => {
  let user_email = req.headers["user-email"];

  try {
    let data = db.collection("Users").findOne({
      $where: {
        email: user_email,
      },
    });
    if (data) {
      req.user = data;
      next();
    } else {
      return res.status(409).json({
        message: "Can't find an account with this email id",
      });
    }
  } catch (ex) {
    console.log(ex);
    return res.status(409).json({
      message: "Can't find an account with this email id",
    });
  }
};

module.exports = { verifyEmail };
