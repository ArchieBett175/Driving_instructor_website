import React, { useState } from "react";
import { motion, MotionConfig } from "motion/react";

const MobileNav = () => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`w-full bg-backgrounds flex justify-start items-center px-10 relative `}
    >
      <NavMenu active={active} setActive={setActive} />
      <div>
        <img
          src="/stephs_logo.png"
          alt="Logo for stepths driving school"
          loading="lazy"
          className="md:size-30 size-20 "
        />
      </div>
      <div className="absolute z-30 right-0.5">
        <AnimatedHamburgerButton active={active} setActive={setActive} />
      </div>
    </div>
  );
};

const AnimatedHamburgerButton = ({ active, setActive }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
        onClick={() => setActive((pv) => !pv)}
        animate={active ? "open" : "closed"}
        initial={false}
      >
        <motion.span
          className="absolute h-1 w-10 bg-primaryColor"
          style={{
            left: "50%",
            top: "35%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
              backgroundColor: "#ffffff",
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
              backgroundColor: "#2d3748",
            },
          }}
        />
        <motion.span
          className="absolute h-1 w-10 bg-primary"
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
              backgroundColor: "#ffffff",
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
              backgroundColor: "#2d3748",
            },
          }}
        />
        <motion.span
          className="absolute h-1 w-5"
          style={{
            left: "calc(50% + 10px)",
            bottom: "35%",
            x: "-50%",
            y: "50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              bottom: ["35%", "50%", "50%"],
              left: "50%",
              backgroundColor: "#ffffff",
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              bottom: ["50%", "50%", "35%"],
              left: "calc(50% + 10px)",
              backgroundColor: "#2d3748",
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const NavMenu = ({ active, setActive }) => {
  return (
    <motion.div
      className="w-full h-screen z-20 bg-primaryColor fixed top-0 left-0"
      initial={{ x: "100%" }}
      animate={{ x: active ? "0%" : "100%" }}
      transition={{
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier for smoother feel
      }}
    >
      <motion.div
        className="flex flex-col items-center justify-center h-full text-2xl text-zinc-100 gap-10 font-rubik"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: active ? 1 : 0,
          y: active ? 0 : 20,
        }}
        transition={{
          duration: 0.3,
          delay: active ? 0.2 : 0, // Delay content animation when opening
        }}
      >
        <motion.h1
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="hover:text-blue-200 transition-colors cursor-pointer"
        >
          About
        </motion.h1>
        <motion.h1
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="hover:text-blue-200 transition-colors cursor-pointer"
        >
          Pricing
        </motion.h1>
        <motion.h1
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="hover:text-blue-200 transition-colors cursor-pointer"
        >
          Gallery
        </motion.h1>
        <motion.h1
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="hover:text-blue-200 transition-colors cursor-pointer"
        >
          Endorsments
        </motion.h1>
        <motion.h1
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="hover:text-blue-200 transition-colors cursor-pointer"
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
          className="hover:text-blue-200 transition-colors cursor-pointer"
        >
          Contact Me
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};

export default MobileNav;
