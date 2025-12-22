import React from 'react'
import fourimg from '../assets/Images/Fourthsec.png'
import { motion } from 'framer-motion'
const Fourthsection = () => {
  return (
    <section className=' relative'>
      <img src={fourimg} alt="Fourth Section" className=' w-full'/>
      <div className=' absolute top-1/6 w-[360px] right-1/5 text-3xl font-6 text-[#313C47] '>
        <h1>We want to help consumers make sense of insurance — to understand how it works, what to look out for, and how to find the right cover for their needs. That’s why we created UnderstandingInsurance.ie designed to make insurance clearer and more approachable. </h1>
        <motion.button whileHover={{y:-3, boxShadow: "0px 12px 30px rgba(17, 186, 215, 0.35)", scale:1}} whileTap={{scale:0.88}} transition={{type:"spring",stiffness:300, damping:20}} className=' mt-7 bg-[#11BAD7] py-3 px-7 text-white rounded-lg font-2 cursor-pointer'>Find out More</motion.button>
      </div>
    </section>
  )
}

export default Fourthsection