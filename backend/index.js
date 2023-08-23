const express = require("express");
var cors = require("cors");
const app = express();
const { generateFile } = require("./generateFile.js");
const { executeCpp } = require("./executeCpp.js");

//In Postman, you are sending an url encoded request
//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handle CORS related errors
app.use(cors());
const { createProxyMiddleware } = require("http-proxy-middleware");
app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:5000/", //origin
    changeOrigin: true,
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
      proxyRes.headers["Access-Control-Allow-Origin"] = "*";
    },
  })
);

//GET request
app.get("/", (req, res) => {
  res.json({ online: "compiler" });
});

//POST request
app.post("/run", async (req, res) => {
  //   const language = req.body.language;
  //   const code = req.body.code;
  const { language = "cpp", code, userInput } = req.body;

  console.log("Language: ", language, "\ncode: ", code, "\ninput: ", userInput);
  //sets cpp as default language
  if (code === undefined) {
    return res.status(404).json({
      success: false,
      error: "Empty Code!",
    });
  }

  try {
    const filePath = await generateFile(language, code);
    // const output = "some output";
    // console.log(filePath);
    const output = await executeCpp(filePath);

    // console.log(`language: ${language}`);
    res.json({ filePath, output });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
