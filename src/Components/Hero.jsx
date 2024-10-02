import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  motion,
  useMotionValue,
  animate,
  useMotionTemplate,
} from "framer-motion";

// Array of Mario-style background colors
const COLORS_TOP = ["#87CEEB", "#ADD8E6", "#1E90FF", "#4682B4"]; // Blue Sky colors

// Cloud data to generate random clouds
const cloudData = [
  { width: 200, height: 100, top: 20, left: 0, speed: 40 },
  { width: 150, height: 75, top: 60, left: 0, speed: 30 },
  { width: 100, height: 50, top: 80, left: 350, speed: 35 },
  { width: 120, height: 60, top: 100, left: 400, speed: 30 },
  { width: 250, height: 120, top: 200, left: 600, speed: 35 },
  { width: 300, height: 150, top: 400, left: 100, speed: 50 },
  { width: 120, height: 60, top: 520, left: 350, speed: 60 },
  { width: 130, height: 65, top: 540, left: 400, speed: 58 },
  { width: 150, height: 75, top: 500, left: 300, speed: 55 },
  { width: 280, height: 140, top: 600, left: 700, speed: 50 },
  { width: 180, height: 90, top: 620, left: 800, speed: 45 },
  { width: 140, height: 70, top: 640, left: 850, speed: 50 },
  { width: 130, height: 65, top: 660, left: 900, speed: 40 },
];

export const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    // Animate background to change between blue sky tones
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`linear-gradient(180deg, ${color} 50%, #7CFC00 100%)`; // Sky to green grass
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  // Animation for clouds moving horizontally across the screen and wrapping around
  const createCloudVariants = (speed, width) => ({
    animate: {
      x: [0, window.innerWidth], // Animate from left to right
      transition: {
        repeat: Infinity, // Infinite looping
        duration: speed, // Custom speed for each cloud
        ease: "linear",
        onRepeat: (animation) => {
          animation.start({ x: -width }); // When animation repeats, start from off-screen left
        },
      },
    },
  });

  return (
    <motion.section
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.6) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px", // Adjusted for mobile scaling
      }}
      className="relative grid min-h-[98vh] place-content-center bg-[#1C9FE5] px-4 py-24 text-gray-200 z-40"
    >
      {/* Clouds Animation - Randomly positioned clouds */}
      {cloudData.map((cloud, index) => (
        <motion.div
          key={index}
          className="absolute bg-white opacity-80 rounded-full"
          style={{
            top: cloud.top,
            left: cloud.left,
            width: `${cloud.width}px`,
            height: `${cloud.height}px`,
          }}
          variants={createCloudVariants(cloud.speed, cloud.width)}
          animate="animate"
        ></motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center pt-24">
        <h1 className="max-w-3xl text-center text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
          CodeCraft '24
        </h1>
        <p className="my-6 max-w-2xl text-center text-xl leading-relaxed sm:text-2xl md:text-3xl text-blue-900">
        CodeCraft, a five-day Python Turtle graphics bootcamp from Sept 28 to Oct 2, challenges Kerala's aspiring coders. Led by Aadithya Sai, participants will master visual design, compete in challenges, and network with peers across the state.
        </p>

        {/* Mario-style Register Button */}
        <a href="https://forms.gle/bmfE4gMi7BgXX8ji9">
          <motion.button
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.05,
              // Mario red hover effect
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="group relative flex w-fit items-center gap-3 rounded-full bg-blue-800 px-8 py-3 text-lg text-white transition-colors hover:bg-[#4d7ae2] sm:px-10 sm:py-4 sm:text-xl md:text-2xl"
          >
            Submit Task 4
            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.button>
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
