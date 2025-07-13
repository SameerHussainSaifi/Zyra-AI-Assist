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
      <div className='border-1 border-green-500'>{query}</div>
    <div className='border-1 border-blue-500'>{result}</div>
    <div className='flex w-full justify-center  relative top-120 '>
    <Search query={query} setQuery={setQuery} result={result} setResult={setResult}/>
    </div>
    </div>
    </>
  )
}

export default Display
