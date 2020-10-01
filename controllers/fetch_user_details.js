const mongoDB = require("../DB/db");
const db = mongoDB.getDB();

const fetchUserDetails = async (uid) => {
  try {
    const UsersCollection = await db.collection("Users");
    const result = await UsersCollection.findOne({
      uid: uid,
    });
    return result;
  } catch (ex) {
    next(ex);
  }
};

module.exports = { fetchUserDetails };
