import React from "react";
import newsimg from '../assets/Images/frame12.png'
const Partners = () => {
  return (
    <section className="w-full bg-[#2b5b73] py-20">
      
      {/* Heading */}
      <h2 className="text-center text-white text-4xl font-semibold mb-14">
        Our Partners
      </h2>

      {/* Cards Wrapper */}
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-8 px-10">
        
        {/* Partner Card */}
        <div className="w-[220px] h-[120px] bg-white rounded-2xl flex items-center justify-center shadow overflow-hidden">
          <img
            src={newsimg}
            alt="Partner Logo"
            className=" w-full h-full object-cover"
          />
        </div>

        <div className="w-[220px] h-[120px] bg-white rounded-2xl flex items-center justify-center shadow overflow-hidden">
          <img
            src={newsimg}
            alt="Partner Logo"
            className=" w-full h-full object-cover"
          />
        </div>

        <div className="w-[220px] h-[120px] bg-white rounded-2xl flex items-center justify-center shadow overflow-hidden">
          <img
            src={newsimg}
            alt="Partner Logo"
            className=" w-full h-full object-cover"
          />
        </div>

        <div className="w-[220px] h-[120px] bg-white rounded-2xl flex items-center justify-center shadow overflow-hidden">
          <img
            src={newsimg}
            alt="Partner Logo"
            className=" w-full h-full object-cover"
          />
        </div>

        <div className="w-[220px] h-[120px] bg-white rounded-2xl flex items-center justify-center shadow overflow-hidden">
          <img
            src={newsimg}
            alt="Partner Logo"
            className=" w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Partners;
