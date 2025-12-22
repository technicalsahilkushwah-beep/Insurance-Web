import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const logos = [1, 2, 3, 4, 5];

const Sixthsec = () => {
  const { scrollYProgress } = useScroll();

  // Scroll se speed control hogi
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section className="bg-[#27566b] py-24 overflow-hidden">
      {/* Heading */}
      <h2 className="text-center text-white text-4xl font-semibold mb-16">
        Our Partners
      </h2>

      {/* Infinite scroll wrapper */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-8 w-max px-24"
        >
          {/* Cards duplicated for infinite effect */}
          {[...logos, ...logos].map((item, index) => (
            <div
              key={index}
              className="min-w-[260px] h-[140px] bg-white rounded-xl flex items-center justify-center shadow-lg"
            >
              <div className="text-center text-gray-600">
                <p className="text-xl font-bold tracking-wide">
                  INSURANCE
                </p>
                <p className="text-sm tracking-[4px]">
                  IRELAND
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sixthsec;
