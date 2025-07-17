import React from "react";
import {useState} from 'react';
import { createContext } from "react";
import Header from "./Header/Header.jsx";
import User from "/src/Components/User/User.jsx";
import History from "/src/Components/History/History.jsx";
import Display from "./Display/Display.jsx";
const userContext=createContext();
function ZyraAIAssist() {
  const[prop,setProp]=useState('prop');
  const [theme,setTheme]=useState('bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-700');
  const [bgTheme,setbgTheme]=useState('bg-white');
  
  return (
    // className='w-full h-screen sm:w-10/12 sm:h-screen sm:mx-auto mb-50'
    <>
     <div  >
    <userContext.Provider value={{theme,setTheme,bgTheme,setbgTheme}} >
     
        <div className="mt-2">
               <Header />
        </div>
        <div className="flex justify-around  mt-5  ">
          <div className="w-2/12 sm:w-1/12 h-screen  rounded-tl-xl rounded-bl-xl shadow-[-10px_0_20px_-5px_rgba(0,0,0,0.3)]">
          
            <User />
          </div>
          <div className="w-3/12 sm:w-3/12 h-screen ">
            <History />
          </div>

          <div className="w-7/12 sm:w-8/12 h-screen ">
            <Display />
          </div>
        </div>
     
        </userContext.Provider>
    </div>
   </>
  );
}

export default ZyraAIAssist;
export {userContext}
