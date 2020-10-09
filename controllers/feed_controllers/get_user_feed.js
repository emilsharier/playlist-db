const mongoUtil = require("../../DB/db");
const db = mongoUtil.getDB();

const getUserFeed = async (req, res, next) => {
  try {
    const uid = req.params.uid;
    // console.log(`uid : ${uid}`);
    const filter = { uid: uid };
    let result = await db.collection("Posts").find(filter).toArray();
    if (result) return res.json(result);
    else return res.json({ message: "No data found" });
  } catch (ex) {
    next(ex);
  }
};

module.exports = { getUserFeed };
