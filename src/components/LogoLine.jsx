import React from 'react'
import rect from "../assets/Logos.svg";

const LogoLine = () => {
  return (
    <div className=' relative w-full h-32 flex justify-center items-center bg-[]'>
      <img src={rect} alt="" />
      <div className='h-full absolute w-1/6 left-[150px] bg-gradient-to-r from-white to-transparent  border-4 border-rose-500'></div>
      <div className='h-full absolute w-1/6 right-[150px] bg-gradient-to-l from-white to-transparent border-4 border-rose-500'></div>
    </div>
  )
}

export default LogoLine

