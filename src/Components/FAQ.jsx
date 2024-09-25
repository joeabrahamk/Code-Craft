import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180 scale-110" : "rotate-0"
      } h-6 w-6 transition-transform duration-500 ease-in-out transform hover:rotate-360`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

// Cloud data to generate random clouds
const cloudData = [
  // Clouds at the top
  { width: 200, height: 100, top: 20, left: 0, speed: 40 },
  { width: 150, height: 75, top: 60, left: 0, speed: 30 },
  { width: 100, height: 50, top: 80, left: 350, speed: 35 },
  { width: 120, height: 60, top: 100, left: 400, speed: 30 },

  // Middle section clouds
  { width: 250, height: 120, top: 200, left: 600, speed: 35 },
  { width: 130, height: 65, top: 240, left: 50, speed: 40 },
  { width: 200, height: 90, top: 260, left: 300, speed: 45 },
  { width: 180, height: 80, top: 300, left: 500, speed: 50 },
  { width: 220, height: 100, top: 350, left: 100, speed: 30 },

  // Middle-bottom section clouds
  { width: 300, height: 150, top: 400, left: 100, speed: 50 },
  { width: 150, height: 75, top: 500, left: 300, speed: 40 },

  // Bottom section clouds
];

function FAQ() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const AccordianStyle =
    "p-4 border border-t-0 border-l-0 border-r-0 border-b-3 border-gray-700 max-md:p-2";
  const AccordianHeaderStyle =
    "text-black hover:text-yellow-500 border-[#9328feaa] max-md:text-sm";
  const AccordianBodyStyle =
    "text-black text-md font-semibold p-2 hover:text-yellow-500 max-md:text-sm";

  // Cloud animation variants
  const createCloudVariants = (speed, width) => ({
    animate: {
      x: [0, window.innerWidth], // Move clouds across the screen
      transition: {
        repeat: Infinity, // Infinite loop
        duration: speed, // Custom speed for each cloud
        ease: "linear",
        onRepeat: (animation) => {
          animation.start({ x: -width }); // Start from off-screen when repeating
        },
      },
    },
  });

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-fit gap-3 p-3   bg-[#1C9FE5]"
      style={{
        backgroundImage: `
        linear-gradient(to right, rgba(255, 255, 255, 0.6) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 1px, transparent 1px)
      `,
        backgroundSize: "40px 40px", // Adjusted for mobile scaling
      }}
    >
      {/* Clouds Animation - Randomly positioned clouds */}
      {cloudData.map((cloud, index) => (
        <motion.div
          key={index}
          className="absolute bg-white opacity-80 rounded-full z-40"
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

      <p className="text-8xl text-white font-bold theme max-md:text-5xl">FAQ</p>
      <div className="z w-3/4 mt-5 max-md:w-4/5 bg-white rounded-3xl z-50 shadow-lg relative">
        <Accordion
          open={open === 1}
          icon={<Icon id={1} open={open} />}
          className={AccordianStyle}
          data-aos="fade-up"
          data-aos-duration={250}
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={AccordianHeaderStyle}
          >
            Is it an offline or online event?
          </AccordionHeader>
          <AccordionBody className={AccordianBodyStyle}>
            It’s offline, but feel free to bring your VR headset just in case
            you want to pretend you’re elsewhere.
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 2}
          icon={<Icon id={2} open={open} />}
          className={AccordianStyle}
          data-aos="fade-up"
          data-aos-duration={250}
          data-aos-delay={250}
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={AccordianHeaderStyle}
          >
            Will there be accommodation?
          </AccordionHeader>
          <AccordionBody className={AccordianBodyStyle}>
            Yes, accommodation will be provided, but if you prefer camping under
            the stars, we won't stop you!
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 3}
          icon={<Icon id={3} open={open} />}
          className={AccordianStyle}
          data-aos="fade-up"
          data-aos-duration={250}
          data-aos-delay={500}
        >
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={AccordianHeaderStyle}
          >
            Do I need to bring a laptop?
          </AccordionHeader>
          <AccordionBody className={AccordianBodyStyle}>
            Yes, but if you're feeling rebellious, you can bring a typewriter
            instead. Just know the Wi-Fi won’t work on that.
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 4}
          icon={<Icon id={4} open={open} />}
          className={AccordianStyle}
          data-aos="fade-up"
          data-aos-duration={250}
          data-aos-delay={500}
        >
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className={AccordianHeaderStyle}
          >
            Will meals be provided during the event?
          </AccordionHeader>
          <AccordionBody className={AccordianBodyStyle}>
            Yes, gourmet meals will be served. If you’re lucky, you might even
            get extra dessert!
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 5}
          icon={<Icon id={5} open={open} />}
          className="p-4  border-t-0 border-l-0 border-r-0  border-gray-700 max-md:p-2"
          data-aos="fade-up"
          data-aos-duration={250}
          data-aos-delay={500}
        >
          <AccordionHeader
            onClick={() => handleOpen(5)}
            className={AccordianHeaderStyle}
          >
            Can I register on the day of the event?
          </AccordionHeader>
          <AccordionBody className={AccordianBodyStyle}>
            No, but you can always show up with snacks, and we’ll consider it.
          </AccordionBody>
        </Accordion>

        {/* Blur effect at the bottom */}
      </div>
      <div className="absolute bottom-0 h-28 w-full bg-gradient-to-t from-[#1C9FE5] to-transparent z-30" />
    </div>
  );
}

export default FAQ;
