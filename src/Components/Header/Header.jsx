import React from 'react'
import { SiChatbot } from "react-icons/si";
import { useContext } from 'react';
import { userContext } from '../ZyraAIAssist';
function Header() {
  let {theme,setTheme}=useContext(userContext);
  
  return (
  <>
  <div className='flex w-full h-20 shadow-[0_0_20px_rgba(0,0,0,0.3)] items-center  rounded-xl'>
      <div className='flex space-x-2 items-center'>
        <div className={`flex  pl-10 ${theme}`}><SiChatbot size={30} className=''/></div>
          <div className={`${theme} font-semibold text-xl`}>Zyra AI Assistant</div>
      </div>

      <div className='w-9/12 justify-center'>
         <div className={`w-full flex justify-center text-3xl font-semibold 
          ${theme}`}>
            <h1>Your Smart Chat Assistant</h1>
        </div>
      </div>
       </div>
       
   </>
  )
}

export default Header
