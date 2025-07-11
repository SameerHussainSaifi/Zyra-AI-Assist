import React from 'react'
import { SiChatbot } from "react-icons/si";
function Header() {
  return (
    <div>
      <div className='flex items-center w-full border-2 border-red-500 mb-5 mt-5'>
        <div><SiChatbot /></div>
        <div className=''>
            <h1>Your Smart Chat Assistant</h1>
        </div>
      </div>

      <div></div>

    </div>
  )
}

export default Header
