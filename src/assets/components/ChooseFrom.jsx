import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";

function ChooseFrom({onChoose,theme}) {
   const [dropDown,setDropDown]= useState(false);

   const Citys = []
  return (
    <div  className={`  ${dropDown?'w-11/12 absolute':'w-5/12 relative'}`}>
        <div onClick={()=>setDropDown(!dropDown)} className={`cursor-pointer flex justify-around items-center rounded-3xl ${theme?'bg-body':'bg-slate-200'}`}>
            <button>Choose City</button>
            <IoIosArrowBack className={`h-10 w-10 duration-1000  hover:fill-orange-500 ${theme?'fill-slate-50':'fill-body'} ${dropDown?' -rotate-90':''} `}/>
        </div>
        {
            dropDown? <p className=' absolute w-full'>lasha</p>:""
        }
    </div>
  )
}

export default ChooseFrom