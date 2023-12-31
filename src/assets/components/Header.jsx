import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

function Header({themeChanger, theme}) {
  return (
    <div className={`w-full h-10 sm:h-14 flex items-center justify-center bg-opacity-60 ${theme?'bg-dark_1':' bg-slate-200'}`}>
        <div className=' w-11/12 h-full text-3xl sm:text-5xl flex justify-between'>
            <p className={` font-bold ${theme?' first-letter:text-blue-700':' first-letter:text-orange-500'}`}>L-WEATHER</p>
            <div onClick={()=>{themeChanger()}} className='flex items-center'>
                {theme ? (<MdDarkMode className=" w-10 h-10 fill-blue-700"  />) : (<CiLight className=" w-10 h-10 fill-orange-500 hover:animate-spin" /> )}
            </div>
        </div>
        
    </div>
  )
}

export default Header