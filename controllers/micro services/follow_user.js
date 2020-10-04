const mongoDb = require("../../DB/db");
const db = mongoDb.getDB();

const followUser = async (req, res, next) => {
  try {
    const uid = req.uid;
    const followId = req.body.followId;
    const filter1 = { uid: followId };
    const filter2 = { uid: uid };
    await db
      .collection("Users")
      .updateOne(filter1, { $push: { followers: uid } });
    await db
      .collection("Users")
      .updateOne(filter2, { $push: { following: followId } });
  } catch (ex) {
    next(ex);
  }
};

module.exports = { followUser };
