import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

function Header({themeChanger, theme}) {
  return (
    <div className='w-full h-10 md:h-14 flex justify-center'>
        <div className=' w-11/12 h-full text-3xl md:text-5xl flex justify-between'>
            <p>L-WEATHER</p>
            <div onClick={()=>{themeChanger()}}>
                {theme ? (<MdDarkMode className=" w-10 h-10 fill-orange-800" />) : (<CiLight className=" w-10 h-10 fill-orange-500" /> )}
            </div>
        </div>
        
    </div>
  )
}

export default Header