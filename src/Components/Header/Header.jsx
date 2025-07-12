import React from 'react'
import { SiChatbot } from "react-icons/si";
function Header() {
  return (
  <>
  <div className='flex w-full h-20 shadow-[0_0_20px_rgba(0,0,0,0.3)] items-center  rounded-xl'>
      <div className='flex space-x-2 items-center'>
        <div className='flex  pl-10 text-purple-500'><SiChatbot size={30} className=''/></div>
          <div className='text-transparent bg-clip-text bg-gradient-to-r from bg-pink-500 to-purple-700 font-semibold text-xl'>Zyra AI Assistant</div>
      </div>

      <div className='w-9/12 justify-center'>
         <div className='w-full flex justify-center text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-700'>
            <h1>Your Smart Chat Assistant</h1>
        </div>
      </div>
       </div>
   </>
  )
}

export default Header
