import { useState } from "react";
import { Search, X } from "lucide-react";
import { animate, motion } from "framer-motion";
const NavSearch = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      
      {/* Search Icon */}
      <motion.button
        whileTap={{scale:0.80}} transition={{type:"spring", stiffness:400,damping:20}}
        onClick={() => setOpen(true)}
        className="px-6 rounded-b-2xl py-3 hover:bg-gray-200 bg-gray-50 transition cursor-pointer"
      >
        <Search size={18} className=" cursor-pointer"/>
      </motion.button>

      {/* Search Overlay */}
      {open && (
         <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{duration:0.3}} className="absolute right-0 top-12 w-80 bg-white border-1  border-blue-50 shadow-lg rounded-xl px-4 py-3 flex items-center gap-2">
          
          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none text-sm "
            autoFocus
          />

          <motion.button initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} onClick={() => setOpen(false)}>
            <X size={16} className="text-gray-400 hover:text-black cursor-pointer" />
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default NavSearch;
