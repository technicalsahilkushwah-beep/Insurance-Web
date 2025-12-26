import React from "react";
import { motion } from "framer-motion";
const ContactForm = () => {
    return (
        <section className="w-full bg-white py-20 relative">

            {/* Main Container */}
            <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20 px-10">

                {/* LEFT CONTENT */}
                <div>
                    <p className="text-teal-500 tracking-widest text-sm mb-4 font-4">
                        GET STARTED
                    </p>

                    <h1 className="text-4xl font-semibold text-[#313C47] mb-6 font-6 ">
                        Contact Now
                    </h1>

                    <h3 className="text-xl font-medium text-[#313C47] font-2 mb-8">
                        Insurance Ireland Dublin
                    </h3>

                    {/* Contact Info */}
                    <div className="space-y-6">

                        {/* Phone */}
                        <div className="flex gap-5 items-start">
                            <div className="w-14 h-14 bg-[#2b5b73] rounded-lg flex items-center justify-center">
                                <i className="fa fa-phone text-white text-xl"></i>
                            </div>
                            <div>
                                <p className="font-medium text-gray-700 font-6">Phone Number</p>
                                <p className="text-gray-500 mt-1 font-6">+353 (1) 676 1820</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex gap-5 items-start">
                            <div className="w-14 h-14 bg-[#2b5b73] rounded-lg flex items-center justify-center">
                                <i className="fa fa-envelope text-white text-xl"></i>
                            </div>
                            <div>
                                <p className="font-medium text-gray-700 font-6">Email Address</p>
                                <p className="text-gray-500 mt-1 font-6">info@insuranceireland.eu</p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex gap-5 items-start">
                            <div className="w-14 h-14 bg-[#2b5b73] rounded-lg flex items-center justify-center">
                                <i className="fa fa-map-marker-alt text-white text-xl"></i>
                            </div>
                            <div>
                                <p className="font-medium text-gray-700 font-6">Office Address</p>
                                <p className="text-gray-500 mt-1 leading-relaxed max-w-md font-6">
                                    Insurance Ireland, Insurance Centre, 5 Harbourmaster Place,
                                    IFSC, Dublin 1, D01 E7E8.
                                </p>
                            </div>
                        </div>


                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="bg-[#f4f7fd] rounded-lg  p-10 ">

                    {/* Name */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2 font-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            className="w-full px-4 py-3 font-6 rounded-lg border text-black border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb- font-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full px-4 font-6 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>

                    {/* Message */}
                    <div className="mb-10">
                        <label className="block text-gray-700 font-medium mb-2 font-2">
                            Your Message
                        </label>
                        <textarea
                            rows="5"
                            placeholder="Enter Your Message"
                            className="w-full font-6 px-4 py-3 rounded-lg border border-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400"
                        ></textarea>
                    </div>

                    {/* Button */}
                    <motion.button whileHover={{y:-3, boxShadow: "0px 12px 30px rgba(17, 186, 215, 0.35)", scale:1}} whileTap={{scale:0.88}} transition={{type:"spring",stiffness:300, damping:20}} className=' mt-7 bg-[#11BAD7] py-3 px-7 text-white rounded-lg font-2 cursor-pointer'>Send Message</motion.button>

                </div>
            </div>
        </section>
    );
};

export default ContactForm;
