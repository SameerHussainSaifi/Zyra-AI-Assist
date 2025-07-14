import React from 'react'
import { useState } from 'react';
import Search from './Search'
function Display() {
  const [result,setResult]=useState(null);
  const [query,setQuery]=useState(null);
  

   console.log(result)
  return (
    <>
    <div className='  h-screen w-full mb-5 shadow-[10px_0_20px_-5px_rgba(0,0,0,0.3)] rounded-tr-xl rounded-br-xl' >
      <div className='relative top-105 left-150 max-w-xs bg-blue-500 text-white rounded-xl p-2 my-2 shadow-md w-fit'>{query}</div>
    <div className='relative top-110 left-10 max-w-xs bg-green-500 text-white rounded-xl p-2 my-2 shadow-md w-fit mb-10'>{result}</div>
    <div className='flex w-full justify-center  relative top-120 mb-7'>
    <Search query={query} setQuery={setQuery} result={result} setResult={setResult}/>
    </div>
    </div>
    </>
  )
}

export default Display
