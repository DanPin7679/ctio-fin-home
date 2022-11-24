const { exec } = require("node:child_process");
const { promisify } = require("util");

const exec2 = promisify(exec);

let getCalcResults = async (input) => {
  console.log("in getCalc");
  console.log(input);
  const { stdout, stderr } = await exec2(
    `../actlib/_build/default/bin/main.exe '${input}'`
  );

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  return stdout;
};

module.exports = getCalcResults;

// app.get("getCalcResults", async (req, res) => {
//   const test = async (_) => {
//     return { name: "dany" };
//   };

//   test().then((value) => {
//     console.log("in index " + value); // 1
//     res.send({ result: value });
//   });
// });

// app.post("/postCalcResults", jsonParser, async (req, res) => {
//   const test = async (_) => {
//     console.log("in post");
//     console.log(req.body);
//     return getCalcResults(JSON.stringify(req.body));
//   };

//   test().then((value) => {
//     console.log(value);
//     res.send(value);
//   });
// });
