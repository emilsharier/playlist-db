const mongoUtil = require("../../DB/db");
const db = mongoUtil.getDB();

const getTrendingPosts = async (req, res, next) => {
  try {
    const filter = { likes: 1 };
    let result = await db.collection("Posts").find({}).sort(filter).toArray();
    res.json(result);
  } catch (ex) {
    next(ex);
  }
};

module.exports = { getTrendingPosts };
