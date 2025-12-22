import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png"
import NavSearch from "./Search";
import {motion} from "framer-motion"
const Navbar = () => {
  return (
    < motion.nav 
     initial={{ y: -40, opacity: 0 }}
     animate={{ y: 0, opacity: 1 }}
     transition={{ duration: 0.6, ease: "easeOut" }}
     className="w-full bg-white shadow-md px-10 py-5 flex items-center justify-between">
      
      {/* LOGO */}
      <motion.div 
      initial={{ opacity:0}}
      animate={{ opacity:1}}
      transition={{ delay:0.2, duration:0.1,}}
      
      className="ml-20">
      <img src={logo} alt="Logo" />
      </motion.div>

      {/* LINKS */}
      <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.1 }} className="flex gap-7 text-gray-700 font-medium">
        <NavLink to="/about" className="hover:text-sky-500 text-[18px] text-[#313C47] font-medium transition-all duration-300 font-6">About</NavLink>
        <NavLink to="/team" className="hover:text-sky-500 text-[18px] text-[#313C47] font-medium transition-all duration-300 font-6">The Team</NavLink>
        <NavLink to="/policy" className="hover:text-sky-500 text-[18px] text-[#313C47] font-medium transition-all duration-300 font-6">Policy & Advocacy</NavLink>
        <NavLink to="/services" className="hover:text-sky-500 text-[18px] text-[#313C47] font-medium transition-all duration-300 font-6">Member Services</NavLink>
        <NavLink to="/events" className="hover:text-sky-500 text-[18px] text-[#313C47] font-medium transition-all duration-300 font-6">Events</NavLink>
        <NavLink to="/publications" className="hover:text-sky-500 text-[18px] text-[#313C47] font-medium transition-all duration-300 font-6">Publications</NavLink>
        <NavLink to="/hub" className="hover:text-sky-500 text-[18px] text-[#313C47] font-medium transition-all duration-300 font-6">Consumer Hub</NavLink>
        <NavLink to="/careers" className="hover:text-sky-500 text-[18px] text-[#313C47] font-medium transition-all duration-300 font-6">Careers</NavLink>
      </motion.ul>

      {/* SEARCH ICON */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.1 }}>
        <NavSearch />
      </motion.div>

    </motion.nav>
  );
};

export default Navbar;
