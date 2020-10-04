const mongoDb = require("../../DB/db");
const db = mongoDb.getDB();

const followStatus = async (req, res, next) => {
  try {
    const uid = req.uid;
    let result = await db.collection("Users").findOne({ followers: uid });
    console.log(result);
    if (!result) {
      return res.json({ message: false });
    } else {
      return res.json({ message: true });
    }
  } catch (ex) {
    next(ex);
  }
};

module.exports = { followStatus };
