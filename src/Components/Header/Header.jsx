import React from 'react'
import headTheme from '/src/assets/logo.png'

import { SiChatbot } from "react-icons/si";
import { useContext } from 'react';
import { userContext } from '../ZyraAIAssist';
function Header() {
  let {theme,setTheme}=useContext(userContext);
  
  return (
  <>
  <div className='flex w-full h-20 shadow-[0_0_20px_rgba(0,0,0,0.3)] items-center  rounded-xl'>
      <div className='flex space-x-2 items-center w-6/12 sm:w-6/12 md:w-5/12'>
        <div className='sm:pl-5 md:pl-7'><img src={headTheme} alt="" className='w-19 sm:w-20 ${theme}'/></div>
          <div className={`${theme} font-semibold text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl`}>Zyra AI Assistant</div>
      </div>

      <div className='  md:w-8/12 justify-center'>
         <div className={`w-full flex justify-center  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold 
          ${theme}`}>
            <h1>Your Smart Chat Assistant</h1>
        </div>
      </div>
       </div>
       
   </>
  )
}

export default Header
