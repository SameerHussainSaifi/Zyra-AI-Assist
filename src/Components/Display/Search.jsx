import React from 'react'
import { createContext } from 'react';
import {useState} from 'react';
import { IoMdSend } from "react-icons/io";
function Search({query,setQuery,result,setResult}) {
  let data=null;
  
  
  
  const URL="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDQoi_C7sxb1WQox8JSERaEUr1L3oHG0b0"
  
  const payload={
    "contents": [
      {
        "parts": [
          {
            "text": query
          }
        ]
      }
    ]
  }
  
 
    async function callApi(){
       let resp=await fetch(URL,{
        method:'POST',
        body:JSON.stringify(payload)
       });
       data =await resp.json();
        
       console.log(data.candidates[0].content.parts[0].text);
        setResult(data.candidates[0].content.parts[0].text);
   }

 
  return (
     
    <div className='flex items-center justify-between sm:w-7/12  h-10 rounded-2xl  border-2 border-pink-500'>
      
      <div className="w-full">
        <input type="text" placeholder='Ask anything '  className='outline-none text-center text-purple-700 w-full' onChange={(event)=>setQuery(event.target.value)}/>
      </div>
      <div className='mr-5 text-purple-700'>
        <button ><IoMdSend size={25} onClick={callApi}/></button>
      </div>
     
    </div>
  )
}

export default Search
