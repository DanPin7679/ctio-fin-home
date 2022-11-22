let MongoClient = require("mongodb").MongoClient;
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let mongoUrlLocal = "mongodb://admin:password@localhost:27017";
  let coll = "questions";

  MongoClient.connect(mongoUrlLocal, function (err, db) {
    if (err) throw err;
    var dbo = db.db("ctio-fin");

    dbo
      .collection(coll)
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.status("200").json(result);
        db.close();
      });
  });
});

module.exports = router;
