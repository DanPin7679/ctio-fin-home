let MongoClient = require("mongodb").MongoClient;

let mongoUrlLocal = "mongodb://admin:password@localhost:27017";
let coll = "categories";

MongoClient.connect(mongoUrlLocal, function (err, db) {
  if (err) throw err;
  var dbo = db.db("ctio-fin");

  // dbo.collection(coll).findOne({}, function (err, res) {
  //   if (err) throw err;
  //   console.log(res);
  // });

  dbo
    .collection(coll)
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
