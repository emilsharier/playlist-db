const mongoDB = require("../DB/db");
const db = mongoDB.getDB();
const uniqid = require("uniqid");

const newPost = async (req, res, next) => {
  try {
    const PostCollection = await db.collection("Posts");
    const uid = req.uid;
    let { title, content, genres } = req.body;
    const obj = {
      post_id: uniqid(),
      uid: uid,
      title: title,
      content: content,
      genres: genres,
    };
    const result = await PostCollection.insertOne(obj);
    if (result) {
      return res
        .json({ status: "OK", message: "Posted succesfully" })
        .statusCode(200);
    } else {
      next("Couldn't post!");
    }
  } catch (ex) {
    next(ex);
  }
};

module.exports = { newPost };
