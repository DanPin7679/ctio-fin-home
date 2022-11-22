const express = require("express");
const router = express.Router();
const {
  createQuestion, 
  getQuestions, 
  getQuestion, 
  delQuestion,
  updateQuestion
} = require("../controllers/qController")

router.get("/", getQuestions)

router.get("/:id", getQuestion)

router.post("/", createQuestion)

router.delete("/:id", delQuestion)

router.patch("/:id", updateQuestion)

module.exports = router
// router.get("/", (req, res) => {
//   let mongoUrlLocal = "mongodb://admin:password@localhost:27017";
//   let coll = "questions";

//   MongoClient.connect(mongoUrlLocal, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("ctio-fin");

//     dbo
//       .collection(coll)
//       .find({})
//       .toArray(function (err, result) {
//         if (err) throw err;
//         console.log(result);
//         res.status("200").json(result);
//         db.close();
//       });
//   });
// });

// module.exports = router;
