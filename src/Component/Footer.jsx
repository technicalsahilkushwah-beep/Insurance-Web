import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#2f3d49] text-gray-300 pt-24">
      {/* Top Content */}
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-20">
        
        {/* Left: Logo + text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-xl font-semibold mb-6">
            INSURANCE IRELAND
          </h2>

          <p className="text-sm leading-6 text-gray-400">
            Insurance Ireland (Member Association) Company Limited by Guarantee
            trading as Insurance Ireland. Registered in Ireland. No. 553048.
            Registered Office: Insurance Centre, 5 Harbourmaster Place, IFSC,
            Dublin 1. D01 E7E8.
          </p>
        </motion.div>

        {/* Middle: Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white font-semibold mb-6">
            Quick Links
          </h3>

          <div className="grid grid-cols-2 gap-y-3 text-sm">
            <p>About</p>
            <p>Consumer Hub</p>
            <p>The Team</p>
            <p>Careers</p>
            <p>Policy & Advocacy</p>
            <p>Media</p>
            <p>Member Services</p>
            <p>Member Directory</p>
            <p>Events</p>
            <p>Gallery</p>
            <p>Publications</p>
          </div>
        </motion.div>

        {/* Right: Associations + Social */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-white text-sm mb-6">
            Insurance Ireland is an active member of the following:
          </p>

          <div className="flex gap-8 items-center mb-10">
            <div className="text-white font-semibold text-sm">
              insurance europe
            </div>
            <div className="text-white font-semibold text-sm">
              GFIA
            </div>
          </div>

          <div className="flex items-center gap-4 text-white">
            <span className="text-sm">Follow Us</span>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </motion.div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mt-20"></div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-10 py-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
        <p>© 2025 Insurance Ireland. All rights reserved.</p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white transition">
            Terms & Conditions
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
