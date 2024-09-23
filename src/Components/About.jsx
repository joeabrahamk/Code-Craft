import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DURATION = 0.5;
const STAGGER = 0.025;

const About = () => {
  return (
    <div
    className="flex flex-col pt-32 p-16 pb-36 relative bg-[#1C9FE5] h-[80vh]"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(255, 255, 255, 0.6) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 1px, transparent 1px)
      `,
      backgroundSize: '30px 30px', // Adjust this value to control grid size
    }}
  >
      <div className="bg-white p-4 rounded-lg  h-[50vh]">
        <FlipHeading text="About" />

        <p className="text-2xl leading-relaxed sm:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, et,
          distinctio eum impedit nihil ipsum modi. kytdyzh yfiflci utddk ktuex
          cg tdekeyeh the afeul, akfuvf hugh buoo. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Quae, et, distinctio eum impedit nihil
          ipsum modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quae, etdistinctio eum impedit nihil ipsum modi. ipsum, dolor sit amet
          consectetur adipisicing elit. Quae, et, distinctio eum impedit nihil
          ipsum modi. kytdyzh yfiflci utddk ktuex cg tdekeyeh the afeul, akfuvf
          hugh buoo. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quae, et, distinctio eum impedit nihil ipsum modi. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Quae, etdistinctio eum impedit
          nihil ipsum modi.
        </p>
      </div>
    </div>
  );
};

// FlipHeading Component
const FlipHeading = ({ text }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation should trigger only once
    threshold: 0.5, // Trigger animation when 50% of the element is in view
  });

  return (
    <motion.h1
      ref={ref} // Attach the inView ref to the element
      className="text-5xl font-bold mb-8 lg:text-8xl overflow-hidden sm:text-2xl text-[#1C9FE5] relative"
      initial="initial"
      animate={inView ? "hovered" : "initial"} // Trigger animation when in view
      style={{
        lineHeight: 0.85,
      }}
    >
      {/* Initial Layer (Current State) */}
      <div className="relative">
        {text.split("").map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Hover Layer (Flipping in) */}
      <div className="absolute inset-0 top-0 left-0">
        {text.split("").map((letter, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.h1>
  );
};

export default About;
