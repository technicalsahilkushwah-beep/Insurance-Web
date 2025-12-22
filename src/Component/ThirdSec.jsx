import { motion } from "framer-motion";
import img1 from "../assets/Images/scroll.png";
import img2 from "../assets/Images/scroll2.png";
import img3 from "../assets/Images/scroll3.png";
import img4 from "../assets/Images/scroll4.png";

const images = [img1, img2, img3, img4];

const ThirdSection = () => {
  return (
    <section className="w-full overflow-hidden py-20 bg-gray-100">
      <div className="relative">

        <motion.div
          className="flex gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,        // slow = premium
            ease: "linear",
            repeat: Infinity
          }}
        >
          {[...images, ...images].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              className="w-[420px] rounded-2xl shadow-sm cursor-pointer"
              whileHover={{
                scale: 1.03,
                y: -6
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25
              }}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ThirdSection;
