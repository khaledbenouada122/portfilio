import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll  overflow-y-hidden snap-x snap-mandatory z-20   scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/40 scrollbar-thin">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen mt-32 "
          >
            <motion.img
              initial={{ 
                y:-300,
                opacity:0
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0 ,opacity:1}}
              viewport={{once:true}}

            src={"/images/tabaani.jpg"}  />
            <div className="">
              <h4 className="text-4xl font-semibold text-center">
                {" "}
                <span className="underline decoration-[#f7ab0a]/50">
                  Case Study {i + 1}
                </span>{" "}
                Tabaani
              </h4>
              <p className="text-lg text-center md:text-left m-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur voluptate tempore a maiores sit. Laboriosam odio
                ullam quaerat impedit quod.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[400px] -skew-y-12 "></div>
    </motion.div>
  );
}

export default Projects;
