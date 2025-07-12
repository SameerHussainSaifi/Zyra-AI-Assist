import React from "react";
import Header from "./Header/Header.jsx";
import User from "/src/Components/User/User.jsx";
import History from "/src/Components/History/History.jsx";
import Display from "./Display/Display.jsx";
function ZyraAIAssist() {
  return (
    <>
      <div className="flex flex-col space-y-2 w-11/12 mx-auto">
        <div className="mt-5">
          <Header />
        </div>
        <div className="flex justify-around  m-5  ">
          <div className="w-1/12 h-screen  rounded-tl-xl rounded-bl-xl shadow-[-10px_0_20px_-5px_rgba(0,0,0,0.3)]">
            <User />
          </div>
          <div className="w-3/12 h-screen ">
            <History />
          </div>

          <div className="w-8/12 h-screen">
            <Display />
          </div>
        </div>
      </div>
    </>
  );
}

export default ZyraAIAssist;
