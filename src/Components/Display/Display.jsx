import React from 'react'

import Search from './Search'
function Display() {
  return (
    <>
    <div className='  h-screen w-full mb-5 shadow-[10px_0_20px_-5px_rgba(0,0,0,0.3)] rounded-tr-xl rounded-br-xl' >
    <div>display content</div>
    <div className='flex w-full justify-center  relative top-120 '>
     <Search/>
    </div>
    </div>
    </>
  )
}

export default Display
