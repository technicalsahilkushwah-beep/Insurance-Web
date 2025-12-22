import React from 'react'
import text from '../assets/Images/Text.png'
import layer from '../assets/Images/Layer.png'
import Clip from '../assets/Images/Clip.png'
import Group from '../assets/Images/Group.png'
import { motion } from 'framer-motion'
const Section = () => {
  return (
    <section className=' flex '>

      {/* First layer  */}

      <div className=' relative'>
        <img src={layer} alt="Layer" className='h-[600px] w-full'/>
      </div>


      {/* Secoud layer  */}

      <div>
        <img src={Clip} alt="Clip" className=' mr-52 max-w-[380px]'/>
      </div>

     
      
      {/* Left Text  */}

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{ delay:0.3, duration:0.8, ease:"easeOut"}} className=' absolute top-1/2  ml-32 '>
        <img src={text} alt="Text" />
        <p className=' mt-7 text-gray-400 font-6'> Insurance Ireland represents over 120 insurance companies operating in the Irish market.</p>
        <motion.button whileHover={{y:-3, boxShadow: "0px 12px 30px rgba(17, 186, 215, 0.35)", scale:1}} whileTap={{scale:0.88}} transition={{type:"spring",stiffness:300, damping:20}} className=' mt-7 bg-[#11BAD7] py-3 px-7 text-white rounded-lg font-2 cursor-pointer'>Find a More</motion.button>
      </motion.div>


      {/* Right img  */}
      
      <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
       y: -6,
      scale: 1.01}}
      transition={{duration: 0.8,ease: "easeOut"}}className="absolute top-1/3 right-40 cursor-pointer">
      <img src={Group} alt="Group" />
      </motion.div>



    </section>
  )
}

export default Section