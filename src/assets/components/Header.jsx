import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

function Header({themeChanger, theme}) {
  return (
    <div className={`w-full h-10 md:h-14 flex items-center ${theme?'bg-dark_1':' bg-slate-200'}`}>
        <div className=' w-11/12 h-full text-3xl md:text-5xl flex justify-between'>
            <p >L-WEATHER</p>
            <div onClick={()=>{themeChanger()}} className='flex items-center'>
                {theme ? (<MdDarkMode className=" w-10 h-10 fill-white"  />) : (<CiLight className=" w-10 h-10 fill-black" /> )}
            </div>
        </div>
        
    </div>
  )
}

export default Header