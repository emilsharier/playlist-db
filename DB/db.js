const MongoClient = require("mongodb").MongoClient;
const url = process.env.MONGO_URI;
const DB = process.env.DATABASE;

var _db;

module.exports = {
  connect_to_server: function (callback) {
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
      _db = client.db(DB);
      // _db.collection('lol').updateOne()
      return callback(err);
    });
  },
  getDB: function () {
    return _db;
  },
};
