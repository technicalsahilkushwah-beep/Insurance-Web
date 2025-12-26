import React from 'react'
import thirdimg from '../assets/Images/ThirdSection.png'
import cardimg from '../assets/Images/scroll.png'
import cardimg2 from '../assets/Images/scroll2.png'
import cardimg3 from '../assets/Images/scroll3.png'
import cardimg4 from '../assets/Images/scroll4.png'

const ThirdSec = () => {
  return (
    <section className=' relative'>
      {/* Background img  */}
      <div>
        <img src={thirdimg} alt="" className=' w-full h-full'/>
      </div>
       {/* Overlay text  */}
      <div className=' absolute top-1/7 ml-36 flex flex-col gap-5'>
        <h1 className='text-2xl text-white font-4'>BENIFIT</h1>
        <p className='  text-5xl text-white font-6'>Industry at a Glance</p>
      </div>

      <div className=' absolute top-1/3 flex right-0 ml-36 gap-7'>

        <div className=' w-[320px] h-[450px] shadow bg-white overflow-hidden'>
           <img src={cardimg} alt="" className=' w-full h-full object-cover'/>
        </div>
        
        <div className=' w-[320px] h-[450px] shadow bg-white overflow-hidden'>
           <img src={cardimg2} alt="" className=' w-full h-full object-cover'/>
        </div>

        <div className=' w-[320px] h-[450px] shadow bg-white overflow-hidden'>
           <img src={cardimg3} alt="" className=' w-full h-full object-cover'/>
        </div>

        <div className=' w-[320px] h-[450px] shadow bg-white overflow-hidden'>
           <img src={cardimg4} alt="" className=' w-full h-full object-cover'/>
        </div>
      </div>
    </section>
  )
}

export default ThirdSec