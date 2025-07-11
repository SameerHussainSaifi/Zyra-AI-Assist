import React from "react";
import Header from "/src/Components/Display/Header.jsx";
import History from "/src/Components/History/History.jsx";
import Display from "./Display/Display.jsx";
function ZyraAI() {
  return (
    <>
      <div className="overflow-y-hidden">
        <Header />
      </div>
      <div className="flex justify-around space-x-5 ml-5 mr-5 mb-5  ">
        <div className='border-2 border-orange-700 h-screen w-full mb-5'>
          <History />
        </div>
        <div className='border-2 border-blue-700 h-screen w-full mb-5'>
          <Display />
        </div>
      </div>
    </>
  );
}

export default ZyraAI;
