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
