const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

const dirCodes = path.join(__dirname, "codes");

if (!fs.existsSync(dirCodes)) {
  fs.mkdirSync(dirCodes, { recursive: true });
}

const generateFile = async (format, content) => {
  const jobID = uuid();
  const fileName = `${jobID}.${format}`;
  const filePath = path.join(dirCodes, fileName); //create a file with name as fileName

  await fs.writeFileSync(filePath, content); //write the content to the file
  return filePath;
};

module.exports = {
  generateFile,
};
