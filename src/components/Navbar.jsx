import React from 'react'
import logo from '../assets/logo.png'


const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4'>
      <div className='flex justify-center items-center'> <img className='w-[200px]' src={logo} alt="logo" /> </div>
      <div>
        <ul className='flex gap-5 justify-center items-center '>
          <li>About</li>
          <li>Features</li>
          <li>Customers</li>
          <li>Updates</li>
          <li>Help</li>
          <li><div className='h-[35px] px-4 flex justify-center items-center rounded-lg bg-black text-white'>Get for free</div></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
