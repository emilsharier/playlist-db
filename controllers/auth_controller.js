const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/jwt_config");
const uniqid = require("uniqid");

const mongoDB = require("../DB/db");
const db = mongoDB.getDB();

/* User sign up using email and password
Also hashing the password before storage */
const signUp = async (req, res) => {
  try {
    const pass = await bcrypt.hash(req.body.password, 8);
    let user = await db.collection("Users").insertOne({
      uid: uniqid(),
      email: req.body.email,
      password: pass,
      username: req.body.username,
      name: req.body.name,
      phone: req.body.phone,
    });
    if (user) {
      return res.status(200).json({
        message: "Registration complete!",
      });
    } else {
      next("Error!");
    }
  } catch (ex) {
    console.log("*****ERROR*******");
    console.log(ex);
    next(ex);
  }
};

/* User sign in using email and password 
Using bcrypt to compare passwords */
const signIn = async (req, res, next) => {
  try {
    let user = await db.collection("Users").findOne({
      email: req.body.email,
    });
    if (user) {
      let passwordStatus = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordStatus) {
        next("Invalid password");
      } else {
        let token = jwt.sign(
          {
            uid: user.uid,
          },
          config.secret,
          {
            expiresIn: "90d",
          }
        );
        return res.json({
          accessToken: token,
        });
      }
    } else {
      next("No such user found!");
    }
  } catch (ex) {
    console.log(ex);
    next(ex);
  }
};

// Not implemented yet
const generatePassword = (length) => {
  let charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
};

module.exports = { signUp, signIn };
