import React from "react";
import { useContext } from "react";
import { userContext } from "../ZyraAIAssist";
import { useState } from "react";
import Search from "./Search";
function Display() {
  let { bgTheme, setbgTheme } = useContext(userContext);
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState(null);

  console.log(result);
  return (
    <>
      <div
        className={` space-y-30 w-full h-screen shadow-[10px_0_20px_-5px_rgba(0,0,0,0.3)] rounded-tr-xl rounded-br-xl ${bgTheme} h-screen w-full flex flex-col items-center justify-center`}
      >
        <div
          className={`w-full  overflow-y-auto  mb-10  `}
        >
          {result.map((item, index) => (
            <div key={index} className=" mt-10 flex justify-evenly space-x-10 w-full ">
              <div className="pt-5  max-w-sm bg-gray-600 text-white rounded-tr-xl rounded-br-xl rounded-bl-2xl pl-4 pr-2 py-1   shadow-md w-fit">
                {item.answer}
              </div>

              <div className=" relative pt-5 max-w-sm  bg-green-600 text-white rounded-tl-xl rounded-bl-xl rounded-br-2xl pl-2 pr-4 py-1  shadow-md w-fit h-fit bottom-14 mt-10">
                {item.question}
              </div>
            </div>
          ))}
           </div>
          <div className="flex w-full justify-center relative mb-25  mt-20">
            <Search
              query={query}
              setQuery={setQuery}
              result={result}
              setResult={setResult}
            />
          </div>
        
      </div>
    </>
  );
}

export default Display;
