const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
// const child_process = require("child_process");

const outputPath = path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

const executeCpp = (filePath) => {
  //execute the cpp file
  const jobID = path.basename(filePath).split(".")[0];
  const outPath = path.join(outputPath, `${jobID}.exe`);
  const command = `g++ ${filePath} -o ${outPath} && cd ${outputPath} && .\\${jobID}.exe`;

  // console.log(`outPath: ${outPath}`);
  // console.log(`outputPath: ${outputPath}`);
  // return { outPath, outputPath };
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) reject({ error, stderr });
      if (stderr) reject(stderr);
      resolve(stdout);
    });
  });
};

module.exports = {
  executeCpp,
};
