import React from "react";
import { Link } from "react-router-dom";
import AlertUser from "./AlertUser";

const Navbar = ({ compilerSection }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="mt-2 text-white text-3xl font-bold text-center">Online Judge</h1>
      <div className="flex items-center text-white text-lg font-medium">
        <a href={`#${compilerSection}`} className="hover:underline">
          Try Our Compiler
        </a>
        <Link to="/auth">
          <img
            className="w-10 h-10 ml-96 mt-2 hover:opacity-60"
            title="Sign In"
            src="https://img.icons8.com/?size=512&id=1CE0gYy8a1e6&format=png"
            alt="Sign In"
          />{" "}
        </Link>
      </div>
      <AlertUser />
    </div>
  );
};
export default Navbar;
