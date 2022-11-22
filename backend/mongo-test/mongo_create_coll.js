let MongoClient = require("mongodb").MongoClient;

let mongoUrlLocal = "mongodb://admin:password@localhost:27017";
let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
let databaseName = "ctio-fin";

let newColl = "questions";

MongoClient.connect(mongoUrlLocal, function (err, db) {
  if (err) throw err;
  var dbo = db.db("ctio-fin");
  dbo.createCollection(newColl, function (err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
