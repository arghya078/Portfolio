import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { assets } from '@/assets/assets'
import logo from '@/public/logo.png'            

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const openSideMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  }

  const closeSideMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(scrollY > 50) {
        setIsScroll(true);
      }else{
        setIsScroll(false);
      }
    })
  }, [])
  return (
    <>
    <div className='fixed top-0 left-0 w-11/12 -z-10 translate-y-[-80%] '>
        <Image src={assets.header_bg_color} alt="header bg color" className='w-full' />
    </div>
    <nav className={`w-full fixed px-5 py-4 lg:px-8 xl:px-[8%] flex items-center justify-between z- ${isScroll ? 'bg-white shadow-sm bg-opacity-50 backdrop-blur-lg' : ''}`}>
        <a href="#top">
            <Image src={logo} alt="logo" className='w-20 cursor-pointer mr-14' />
        </a>

        <ul className={`hidden md:flex gap-6 items-center lg:gap-8 rounded-full px-12 py-3 ${isScroll ? 'bg-white shadow-sm bg-opacity-50' : ''}`}>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#work">My Works</a></li>
            <li><a href="#contact">Contact Me</a></li>
        </ul>

        <div className='flex items-center gap-4'>

           <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 hover:bg-rose-50'>Contact Me <Image src={assets.arrow_icon} alt="arrow icon" className='w-3' /></a>

           <button className='md:hidden block ml-3' onClick={openSideMenu}>
            <Image src={assets.menu_black} alt="menu icon" className='w-6' />
           </button>
        </div>

        {/* mobile menu */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-scrren bg-rose-50 transition duration-500'>

          <div className='absolute top-6 right-6' onClick={closeSideMenu}>
            <Image src={assets.close_black} alt="close icon" className='w-5 cursor-pointer' />
          </div>
            <li><a href="#top" onClick={closeSideMenu}>Home</a></li>
            <li><a href="#about" onClick={closeSideMenu}>About</a></li>
            <li><a href="#work" onClick={closeSideMenu}>My Works</a></li>
            <li><a href="#contact" onClick={closeSideMenu}>Contact Me</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar