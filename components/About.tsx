import React from "react";
import { motion } from "framer-motion";
type Props = {};

function About({}: Props) {
  return (
    <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
    className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        src="/images/me.jpg"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="mt-32 md:mt-0 xl:mt-32   flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:-w-64 md:h-95 xl:w-[500px] xl:h-[600px] "
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold ">
          Here is a{" "}
          <span className=" underline decoration-[#f7ab0a]/50">little</span>{" "}
          background:{" "}
        </h4>
        <p className="text-base">
          Talented Frontend Developer specialized in semantic responsive markup
          layouts and converting from Figma mockups CSS/React. I'm in love with
          all the fancy stuff like CSS3 flexbox, grid,animations, and
          transition, as well as Responsive design -
          Bootstrap4/TailwindCss/customCs
        </p>
      </div>
    </motion.div>
  );
}

export default About;
