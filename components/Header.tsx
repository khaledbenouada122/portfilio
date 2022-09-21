import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <div className="flex flex-row items-center">
          {/* Social Icons */}

          <SocialIcon
            url="https://www.linkedin.com/in/nader-elhaj-48b253156/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/NaderElhaj"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.facebook.com/nader.elhaj.357/"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <div className="flex flex-row items-center text-gray-300 cursor-pointer">
          <SocialIcon
            fgColor="gray"
            bgColor="transparent"
            className="cursor-pointer"
            network="email"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in Touch
          </p>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
