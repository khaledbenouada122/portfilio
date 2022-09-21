import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg  items-center space-y-7 flex-shrink-0  md:w-[600px] xl:w-[900px] w-full snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden  ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="/images/tabaani.jpg"
        className=" relative w-32 h-32 xl:w-[200px] xl:h-[200px] rounded-full object-center object-contain   "
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">Front End Developer</h4>
        <p className="font-bold text-2xl mt-1">TABAANI</p>
        <div className="flex space-x-2 my-2">
          <img src="/images/react.png" alt="" className="w-10 h-10 rounded-full" />
          <img src="/images/react.png" alt="" className="w-10 h-10 rounded-full" />
          <img src="/images/react.png" alt="" className="w-10 h-10 rounded-full" />
          <img src="/images/react.png" alt="" className="w-10 h-10 rounded-full" />

        </div>
        <p className="uppercase py-5 text-gray-300">Started work... -Ended...</p>
        <ul className="list-disc space-y-4 mt-5 text-lg">
          <li>Test.....</li>
          <li>Test.....</li>
          <li>Test.....</li>
          <li>Test.....</li>
          <li>Test.....</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
