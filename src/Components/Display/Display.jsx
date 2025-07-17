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
        className={` flex flex-col space-y-30 overflow-y-auto h-screen w-full mb-5 shadow-[10px_0_20px_-5px_rgba(0,0,0,0.3)] rounded-tr-xl rounded-br-xl ${bgTheme} `}
      >
        hello
        <div>
          {/* <div className="relative top-70 left-110 max-w-xs bg-blue-500 text-white rounded-xl p-2 my-2 shadow-md w-fit">
            {query}
          </div> */}
          <div className="relative space-y-10   ">
            {result.map((item, index) => (
  <div key={index} className="mb-4">
    <div className="relative  left-110 max-w-xs bg-blue-500 text-white rounded-xl p-2 my-2 shadow-md w-fit">Q: {item.question}</div>
    <div className="relative  left-10 max-w-xs bg-green-500 text-white rounded-xl p-2 my-2 shadow-md w-fit">A: {item.answer}</div>
  </div>
))}
          </div>
        </div>
        <div className="flex w-full justify-center relative   mb-5">
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
