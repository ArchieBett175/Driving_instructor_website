import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import React, { useEffect, useState } from "react";

const SECTION_HEIGHT = 250;

const Hero = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenSize.width < 768;
  const { scrollY } = useScroll();

  const blur = useTransform(
    scrollY,
    [SECTION_HEIGHT / 8, SECTION_HEIGHT],
    [8, 0]
  );

  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <div className="relative w-full bg-backgrounds font-rubik font-medium">
      <div
        className="w-full flex bg-backgrounds flex-col items-center"
        style={{
          height: isMobile
            ? `calc(${SECTION_HEIGHT}px + 25vh)`
            : `calc(${SECTION_HEIGHT}px + 100vh)`,
        }}
      >
        <div className="flex flex-col w-full relative">
          <div className="xl:text-8xl lg:text-7xl md:text-5xl text-4xl tracking-tight z-10 lg:mx-[14%] md:mx-[15%] sm:mx-[7%] mx-[8%]">
            <h1>Your Driving Journey</h1>
          </div>

          <motion.div className="w-10/11 md:w-3/4 h-75 md:h-130 2xl:h-170 -mt-2 md:-mt-3 place-self-center relative rounded-4xl shadow-2xl overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-bottom bg-cover rounded-4xl"
              style={{
                filter,
                backgroundImage: "url(/steph_cover.jpg)",
                backgroundPosition: "50% 80%",
                backgroundRepeat: "no-repeat",
              }}
            />

            <div className="relative z-10 px-6 py-2 h-full flex flex-col justify-between text-backgrounds">
              <div>
                <h1 className=" italic tracking-wide text-shadow-lg xl:text-8xl lg:text-7xl md:text-5xl text-4xl">
                  Starts Here
                </h1>

                <p className=" text-sm sm:text-base md:text-lg lg:text-xl wrap-normal max-w-4/5 text-shadow-lg">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmodtempor incididunt ut labore et
                </p>
              </div>
              <div className="md:text-2xl text-lg w-full flex justify-end md:p-6">
                <motion.button
                  className="md:p-4 p-2 bg-secondary/20 hover:bg-secondary/70 transition-colors rounded-2xl backdrop-blur-md shadow-xl cursor-pointer"
                  whileHover={{
                    scale: 1.2,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  Get In Touch
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// <ImageToUnblur />
// <div
//   className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-rubik
//   font-medium absolute xl:inset-1 xl:left-[15%] md:top-10 md:left-[15%] sm:top-13 sm:left-[5%]
//   top-15 left-[5%] md:w-3/4 w-10/11 h-75 xl:h-140 md:h-135 2xl:h-190 flex flex-col justify-between"
// >
//   <div>
//     <h1>Your Driving Journey</h1>
//     <h1 className="text-backgrounds italic tracking-wide flex gap-6 relative w-fit text-shadow-lg ">
//       Starts Here
//     </h1>
//     <p className="md:text-2xl text-lg text-backgrounds wrap-normal md:w-10/11 w-full">
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//       eiusmodtempor incididunt ut labore et
//     </p>
//   </div>
//   <div className="flex justify-end lg:mx-20 mx-5 md:mx-15 ">
//     <motion.button className="md:text-3xl sm:text-2xl text-lg text-backgrounds bg-secondary/10 backdrop-blur-sm shadow-xl p-3 rounded-2xl cursor-pointer">
//       Get In Touch
//     </motion.button>
//   </div>
// </div>

const ImageToUnblur = () => {
  const { scrollY } = useScroll();

  const blur = useTransform(
    scrollY,
    [SECTION_HEIGHT / 8, SECTION_HEIGHT],
    [5, 0]
  );

  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.div
      className="w-10/11 md:w-3/4 h-75 md:h-130 bg-bottom bg-cover rounded-4xl 
          shadow-2xl 2xl:h-170 absolute md:top-[10%] top-[22%]"
      style={{
        filter,
        backgroundImage: "url(/steph_cover.jpg",
        backgroundPosition: "50% 80%",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default Hero;
