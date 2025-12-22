import { motion } from "framer-motion";
import cardImg from "../assets/Images/news.png";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const FifthSection = () => {
  return (
    <section className="w-full bg-[#F5F7FB] py-28">
      <div className="max-w-7xl mx-auto px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <p className="text-sm tracking-widest text-gray-400">
              INSURANCE IRELAND
            </p>
            <h2 className="text-4xl font-semibold text-[#313C47] mt-2">
              News & Publications
            </h2>
          </div>

          <a
            href="#"
            className="text-[#11BAD7] font-medium hover:underline"
          >
            See All
          </a>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {[1, 2, 3].map((_, i) => (
            <motion.div
              key={i}
              variants={cardAnim}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group bg-transparent cursor-pointer"
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-2xl bg-[#4A5A67]">
                <img
                  src={cardImg}
                  alt="News"
                  className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="mt-5">
                <p className="text-[#313C47] font-medium leading-relaxed">
                  Insurance Ireland comments on Central Bank of Ireland’s
                  seventh annual NCID Private Motor...
                </p>

                <span className="text-sm text-[#11BAD7] block mt-2">
                  2025-10-31
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FifthSection;
