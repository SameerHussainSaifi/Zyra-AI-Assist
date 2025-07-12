import React from 'react'
import { IoMdSend } from "react-icons/io";
function Search() {
  return (
    <div className='flex items-center justify-between w-7/12  h-10 rounded-2xl  border-2 border-pink-500'>
      <div className="w-full">
        <input type="text" placeholder='Ask anything '  className='outline-none text-center text-purple-700 w-full'/>
      </div>
      <div className='mr-5 text-purple-700'>
        <button ><IoMdSend size={25} /></button>
      </div>
      
    </div>
  )
}

export default Search
