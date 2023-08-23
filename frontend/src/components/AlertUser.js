// Alert users to signIn to save their progress
import React from "react";
import { useState } from "react";

const AlertUser = () => {
  const [flashMessage, setFlashMessage] = useState(true);

  const handleFlashMessage = () => {
    var messageButton = document.getElementById("alertMessage").style;
    if (flashMessage) {
      messageButton.display = "none";
    } else messageButton.display = "block";
    setFlashMessage(!flashMessage);
  };

  return (
    <div className="w-10/12 absolute top-16" id="alertMessage">
      <div className="p-2 rounded-sm bg-blue-600 text-white flex justify-between">
        <p className="">
          Sign In to save progress. Click the logo on top right to do so.
        </p>
        <span className="hover:cursor-pointer" onClick={handleFlashMessage}>
          X
        </span>
      </div>
    </div>
  );
};
export default AlertUser;
