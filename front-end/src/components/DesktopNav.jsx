import React from "react";
import { motion } from "motion/react";

const DesktopNav = () => {
  return (
    <div className="flex w-full h-fit bg-backgrounds justify-between items-center">
      <div className="md:px-5 px-1 lg:px-10 flex items-center">
        <img
          src="/stephs_logo.png"
          alt="Logo for stepths driving school"
          loading="lazy"
          className="md:size-25 size-20 lg:size-30 xl:size-40"
        />
      </div>
      <div className="md:text-md  text-text flex items-center md:px-5 md:gap-5 lg:text-xl xl:text-2xl lg:px-7 lg:gap-10">
        <motion.h1
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="hover:text-blue-400 transition-colors cursor-pointer"
        >
          About
        </motion.h1>
        <motion.h1
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="hover:text-blue-400 transition-colors cursor-pointer"
        >
          Pricing
        </motion.h1>
        <motion.h1
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="hover:text-blue-400 transition-colors cursor-pointer"
        >
          Gallery
        </motion.h1>
        <motion.h1
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="hover:text-blue-400 transition-colors cursor-pointer"
        >
          Endorsments
        </motion.h1>
        <motion.h1
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="hover:text-blue-400 transition-colors cursor-pointer"
        >
          Resources
        </motion.h1>
        <motion.h1
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="hover:text-blue-400 transition-colors cursor-pointer"
        >
          Contact Me
        </motion.h1>
      </div>
    </div>
  );
};

export default DesktopNav;
