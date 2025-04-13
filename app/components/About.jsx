import React from 'react'
import Image from 'next/image'
import { assets, toolsData } from '@/assets/assets'
import { infoList } from '@/assets/assets'
import { motion } from "motion/react"
import user_img from '@/public/user_img.png'


const About = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
     id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.3}}
         className='text-center mb-2 text-lg '>Introduction</motion.h4>
        <motion.h2
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.5}}
         className='text-center text-5xl font-bold'>About Me</motion.h2>

        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
         className='flex items-center gap-20 w-full flex-col lg:flex-row my-20'>
            <motion.div
            initial={{opacity:0, scale:0.9}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:0.6}}
             className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={user_img} alt="user image" className='rounded-3xl w-full' />
            </motion.div>
            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6, delay:0.8}}
             className='flex-1'>
              <p className='mb-10 max-w-2xl'>I am a passionate and motivated React Developer with a strong foundation in web development. Recently, I have completed my training in React.js and am eager to apply my knowledge of JavaScript, HTML, and CSS in building dynamic and responsive web applications. My experience includes working on projects that utilize React for building user interfaces, managing state with hooks, and integrating REST APIs to enhance application functionality. I am committed to continuous learning and staying up-to-date with the latest trends and technologies in the field of web development.</p>

              <motion.ul
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{duration:0.8, delay:1}}
               className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {
                  infoList.map(({icon, title, description}, index) => (
                    <motion.li
                    whileHover={{scale:1.05}}
                     className= 'border-[0.5px] border-gray-300 rounded-xl] cursor-pointer p-6 hover:bg-gray-100 hover:transform hover:scale-105 transition-all ease-in-out duration-300' key={index}>
                      <Image src={icon} alt={title} className='w-7 mt-3' />
                      <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                      <p className='text-gray-500 text-sm'>{description}</p>
                    </motion.li>
                  ))
                }
              </motion.ul>
              <motion.h4
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.5, delay:1.3}}
               className='my-4 font-semibold text-gray-700'>Tools I use</motion.h4>
              <motion.ul
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{duration:1.5, delay:0.6}}
               className='flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool, index) => (
                  <motion.li
                  whileInView={{scale:1.1}}
                   key={index} className='flex items-center justify-center w-12 sm:w-14 h-12 rounded-full cursor-pointer border border-gray-300 hover:bg-gray-100 hover:transform hover:scale-105 transition-all ease-in-out duration-300'>
                    <Image src={tool} alt="tool" className='w-5 sm:w-7' />
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About