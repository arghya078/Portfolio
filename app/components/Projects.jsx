import { serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'

const Projects = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg '>My Works</h4>
        <h2 className='text-center text-5xl font-bold'>Projects</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-2'>I am a passionate and motivated React Developer with a strong foundation in web development.</p>

        <div className='grid grid-cols-4 gap-6 my-10'>
           {serviceData.map(({icon, title, description,link}, index)=>(
            <div key={index} className='p-4 border-[0.5px] border-gray-300 rounded-xl cursor-pointer hover:bg-gray-100 hover:transform hover:scale-105 transition-all ease-in-out duration-300'>
               <Image src={icon} alt={title} className='w-10' />
               <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
               <p className='text-gray-600 text-sm leading-5'>{description}</p>
                <a href={link} className='flex items-center gap-2 mt-5 text-sm'>
                  View Project <Image src={assets.right_arrow} alt="arrow icon" className='w-4' />
                </a>
            </div>
           ))}
        </div>
    </div>
  )
}

export default Projects