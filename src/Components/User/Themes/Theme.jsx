import React from 'react'
import {useState} from 'react';
import { RiRobot2Fill } from "react-icons/ri";
import {useContext} from 'react';
import {userContext} from '/src/Components/ZyraAIAssist.jsx';
function Theme() {
  let {theme,setTheme}=useContext(userContext);
  
  function setBlack(){
    setTheme('text-black');
  
  }
  function setGreen(){
    setTheme('text-green-500');
  }
   function setBlue(){
    setTheme('text-blue-500');
  }
  const [dropdown,setDropdown]=useState(false);
  function themeSet(){
    console.log('theme color applied');
    setDropdown(!dropdown);
    
  }
  return (
    <>
    <div className='text-purple-500 '>
      <button onClick={themeSet}><RiRobot2Fill size={27}/> </button>
    </div>
    {dropdown?
    <div className='flex flex-col space-y-2 items-center mb-5'>
      <div className='bg-black h-5 w-5 rounded-full' onClick={setBlack}></div>
      <div className='border-1 border-black h-5 w-5 rounded-full'></div>
      <div className='bg-green-500 h-5 w-5 rounded-full' onClick={setGreen}></div>
    <div className='bg-blue-500 h-5 w-5 rounded-full'onClick={setBlue}></div>
    <div className='bg-purple-500 h-5 w-5 rounded-full'></div>
    <div className='bg-orange-500 h-5 w-5 rounded-full'></div>
   
    </div>
      :null}
    </>
  )
}

export default Theme
