import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import logo from '@/public/logo.png'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={logo} alt="footer image" className='w-36 mx-auto mb-2' />
            <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt="footer image" className='w-6' />
            jeetdutta078@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>Copyright © 2025 Arghyadeep Dutta. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a href="https://github.com/arghya078">Github</a></li>
                <li><a href="#">Linkedin</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer