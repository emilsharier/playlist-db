const mongoDb = require("../../DB/db");

const db = mongoDb.getDB();

const editPost = async (req, res, next) => {
  try {
    const uid = req.uid;
    let { post_id, title, content } = req.body;

    const filter = { post_id: post_id };
    let result = await db
      .collection("Posts")
      .update(filter, { $set: { title: title, content: content } });
    return res.json({ message: "OK" });
  } catch (ex) {
    next(ex);
  }
};

module.exports = { editPost };
