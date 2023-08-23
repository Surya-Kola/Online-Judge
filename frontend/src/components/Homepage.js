import React from "react";
import Navbar from "./Navbar";
import Features from "./Features";

const Homepage = ({
  language,
  code,
  setCode,
  userInput,
  setUserInput,
  output,
  handleChange,
  handleRunCode,
}) => {
  const compilerSection = "compilerSection";
  return (
    <div className="container mx-auto">
      <Navbar compilerSection={compilerSection} />
      {/* A brief on Online Judge */}
      <Features />
      {/* <div className="h-screen"></div> */}
      <p className="mt-4 text-2xl text-white text-center font-medium" id={compilerSection}>
        Online Compiler
      </p>
      <div className="mt-4">
        <select
          className="w-full rounded-md shadow-sm px-2 py-2"
          value={language}
          onChange={handleChange}
        >
          <option value="c++">C++</option>
          <option value="c">C</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
        </select>
      </div>{" "}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="bg-white rounded-md">
          <p className="mt-2 text-center font-bold">Code</p>
          <textarea
            className="w-full h-48 shadow-sm p-2 "
            placeholder="Enter your code here"
            value={code}
            onChange={(event) => setCode(event.target.value)}
          />
        </div>
        <div className="grid grid-rows-2 gap-2">
          <div className="bg-white rounded-md overflow-scroll">
            <p className="mt-2 text-center font-bold">Input</p>
            <textarea
              className="mt-4 w-full p-2"
              placeholder="Enter input data here"
              value={userInput}
              onChange={(event) => setUserInput(event.target.value)}
            />
          </div>
          <div className="bg-white rounded-md overflow-scroll">
            <p className="mt-2 text-center font-bold">Output</p>
            <textarea
              className="mt-4 w-full p-2"
              value={output}
              readOnly={true}
            />
          </div>
        </div>
      </div>
      <div className="mb-2 grid grid-cols-2 gap-2">
        <button
          className="w-full 
          bg-blue-500 hover:bg-blue-400 
          text-white rounded-md shadow-sm mt-4 p-2 font-bold"
          type="submit"
          onClick={handleRunCode}
        >
          Run
        </button>
        <button
          className="w-full bg-green-500 hover:bg-green-400 text-white rounded-md shadow-sm mt-4 p-2 font-bold"
          type="submit"
          onClick={handleRunCode}
        >
          Submit
        </button>
      </div>
      <div className="h-screen"></div>
    </div>
  );
};
export default Homepage;
