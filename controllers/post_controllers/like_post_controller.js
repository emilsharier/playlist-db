const router = require("express").Router();
const mongoDb = require("../DB/db");

const db = mongoDb.getDB();

const likePost = async (req, res, next) => {
  try {
    const { post_id } = req.body;
    const uid = req.uid;
    const filter = { liked_by: uid };
    let result = await db.collection("Posts").findOne(filter);
    if (result) {
      return res.json({ status: "OK", result: result });
    } else {
      await db
        .collection("Posts")
        .updateOne(
          { post_id: post_id },
          { $inc: { likes: 1 }, $push: { liked_by: uid } }
        );
      return res.json({ status: "OK" });
    }
  } catch (ex) {
    next(ex);
  }
};

module.exports = { likePost };
