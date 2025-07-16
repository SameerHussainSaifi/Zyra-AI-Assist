import React from 'react'
import { useContext } from 'react';
import { userContext } from '../ZyraAIAssist';
import { useState } from 'react';
import Search from './Search'
function Display() {
  let {bgTheme,setbgTheme}=useContext(userContext);
  const [result,setResult]=useState(null);
  const [query,setQuery]=useState(null);
  

   console.log(result)
  return (
    <>
    <div className={`   h-screen w-full mb-5 shadow-[10px_0_20px_-5px_rgba(0,0,0,0.3)] rounded-tr-xl rounded-br-xl ${bgTheme}`} >
      hello
      <div className='relative top-105 left-150 max-w-xs bg-blue-500 text-white rounded-xl p-2 my-2 shadow-md w-fit'>{query}</div>
    <div className='relative top-110 left-10 max-w-xs bg-green-500 text-white rounded-xl p-2 my-2 shadow-md w-fit mb-10'>{result}</div>
    <div className='flex w-full justify-center relative top-85 sm:top-90 md:top-80 lg:top-85 xl:top-105 2xl:top-110  '>
    <Search query={query} setQuery={setQuery} result={result} setResult={setResult}/>
    </div>
    </div>
    </>
  )
}

export default Display
