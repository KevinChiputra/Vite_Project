import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

  const [valid, setValid] = useState(false);
  const handleClick = () => setValid(!valid);

  return (
    // container
    <div className='absolute flex justify-between items-center w-full px-8 py-8 md:px-16'>
      {/* left Item */}
      <div>
        <p className='font-[AbhayaLibre] text-3xl font-bold text-[#FFFFFF]'>Travelo</p>
      </div>

      {/* right item */}

        <ul className='hidden md:flex gap-8 text-md text-[#FFFFFF]'>
          <li>Home</li>
          <li>About</li>
          <li>Packages</li>
          <li>Blog</li>
        </ul>


      {/* Hamburger menu */}
      <div className='z-10 md:hidden' onClick={handleClick}>
        {!valid ? <FaBars size={25} color='white'/> : <FaTimes size={25} color='white'/>}
      </div>

      {/* Menu Mobile */}
      <div className={!valid ? 'fixed bg-[#2E4374] w-[200px] h-screen left-0 top-0 ml-[-200px] duration-100 flex flex-col justify-center items-center' : 'ml-200 duration-200 fixed bg-[#2E4374] w-[200px] h-screen left-0 top-0 flex flex-col justify-center items-center'}>
        {/* Title */}
        <div className='fixed top-0 pt-8 text-[#FFFFFF]'>
          <p className='font-[AbhayaLibre] text-3xl font-bold'>Travelo</p>
        </div>

        {/* Menu */}
        <ul className='text-xl text-[#FFFFFF] flex flex-col justify-center items-center gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Packages</li>
            <li>Blog</li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar