import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Homepage from "./components/Homepage";
import "./index.css";

const App = () => {
  const [language, setLanguage] = useState("c++");
  const [code, setCode] = useState("");
  const [userInput, setUserInput] = useState("");
  const [output, setOutput] = useState("Your output data is shown here");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleRunCode = (event) => {
    event.preventDefault();
    console.log("Language: " + language);
    console.log("Code: ", code);
    console.log("input: ", userInput);

    //send the data to server
    const serverAddr = "http://127.0.0.1:5000/run";
    const data = { language, code, userInput };
    axios
      .post(serverAddr, data)
      .then((response) => {
        console.log(response.data.output);
        setOutput(response.data.output);
      })
      .catch((error) => {
        console.log(error.response);
      });
    console.log(JSON.stringify(data));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              language={language}
              code={code}
              setCode={setCode}
              userInput={userInput}
              output={output}
              setUserInput={setUserInput}
              handleChange={handleChange}
              handleRunCode={handleRunCode}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
