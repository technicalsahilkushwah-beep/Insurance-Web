import React from 'react'
import doted from '../assets/Images/Doted.avif'
import { motion } from 'framer-motion'
import card from '../assets/Images/Card 1.png'
import card2 from '../assets/Images/Card 2.png'

const Secoundsection = () => {
  return (
    <section className=' relative flex'>
  <div
    className="w-full h-[500px] shadow"
    style={{
      backgroundImage: `url(${doted})`,
      backgroundRepeat: "repeat",
    }}
  >
  </div>

  <div className=' absolute top-1/4 ml-32 flex flex-col gap-6'>
    <h2 className=' font-4 text-2xl text-[#58585B]'>INSURANCE IRELAND</h2>
    <h1 className=' text-6xl font-2 text-[#313C47]'>Vision and Mission</h1>
    {/* Secound section text */}
    <div>
    <p className=' text-[#313C47] font-6'>For more information on Insurance Ireland’s ‘Our Mission</p>
    <p>& Strategy: 2025 and Beyond’ document, please </p>
    {/* SECOUND SECTION BUTTON */}
    </div>
    <motion.button whileHover={{y:-3, boxShadow: "0px 12px 30px rgba(17, 186, 215, 0.35)", scale:1}} whileTap={{scale:0.88}} transition={{type:"spring",stiffness:300, damping:20}} className=' mt-7 bg-[#11BAD7] py-3 px-4 text-white rounded-lg font-2 cursor-pointer'>Find out More</motion.button>
  </div>

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18
      }
    }
  }}
  className="absolute left-1/2 top-[14%] flex flex-col gap-6"
>
  {/* CARD 1 */}
  <motion.img
    src={card}
    alt="Our Vision"
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 }
    }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    whileHover={{
      y: -6,
      boxShadow: "0px 20px 40px rgba(0,0,0,0.08)"
    }}
    className="rounded-xl cursor-pointer"
  />

  {/* CARD 2 */}
  <motion.img
    src={card2}
    alt="Our Mission"
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 }
    }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    whileHover={{
      y: -6,
      boxShadow: "0px 20px 40px rgba(0,0,0,0.08)"
    }}
    className="rounded-xl cursor-pointer"
  />
</motion.div>


</section> 

  )
}

export default Secoundsection
