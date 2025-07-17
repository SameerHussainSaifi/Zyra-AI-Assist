import React from 'react'
import themechange from '/src/assets/themechange.png'
import {useState} from 'react';
import { RiRobot2Fill } from "react-icons/ri";
import {useContext} from 'react';
import {userContext} from '/src/Components/ZyraAIAssist.jsx';
function Theme() {
  let {theme,setTheme,bgTheme,setbgTheme}=useContext(userContext);
  
  
  function setPink(){
    setTheme('text-pink-500');
    setbgTheme('bg-pink-200');
  }
  function setWhite(){
    setbgTheme('bg-white');
  }
  function setBlack(){
    setTheme('text-zinc-600');
    setbgTheme('bg-zinc-600');
   
  }
  function setGreen(){
    setTheme('text-green-500');
    setbgTheme('bg-green-200');
  }
   function setBlue(){
    setTheme('text-blue-500');
    setbgTheme('bg-blue-200');
  }
   function setPurple(){
    setTheme('text-purple-500');
    setbgTheme('bg-purple-200');
  }
  function setOrange(){
    setTheme('text-orange-400');
    setbgTheme('bg-amber-300');
  }
  const [dropdown,setDropdown]=useState(false);
  function themeSet(){
    console.log('theme color applied');
    setDropdown(!dropdown);
    
  }
 
  return (
    <>
    
    <div className={`text-purple-500  `}>
      <button onClick={themeSet} className={` w-16 `}><img src={themechange} alt="" /> </button>
    </div>
    {dropdown?
    <div className='flex flex-col space-y-2 items-center mb-5'>
      <div className='bg-pink-500 h-5 w-5 rounded-full' onClick={setPink}></div>
      <div className='bg-green-500 h-5 w-5 rounded-full' onClick={setGreen}></div>
    <div className='bg-blue-500 h-5 w-5 rounded-full'onClick={setBlue}></div>
    <div className='bg-purple-500 h-5 w-5 rounded-full' onClick={setPurple}></div>
    <div className='bg-amber-500 h-5 w-5 rounded-full' onClick={setOrange}></div>
    <div className='bg-white h-5 w-5 rounded-full border-1' onClick={setWhite}></div>
    <div className='bg-black h-5 w-5 rounded-full' onClick={setBlack} ></div>
    </div>
      :null}
     
    </>
  )
}

export default Theme
