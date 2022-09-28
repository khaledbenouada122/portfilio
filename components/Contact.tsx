import React from "react";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        CONTACT
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got what you need,
          <span className="decoration-[#f7ab0a] underline">Lets Talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 text-[#f7ab0a] " />
            <p className="text-2xl">+216 52 241 103</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 text-[#f7ab0a] " />
            <p className="text-2xl">naderelhaj3@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapIcon className="h-7 w-7 text-[#f7ab0a] " />
            <p className="text-2xl">Sahloul , Sousse</p>
          </div>
        </div>
        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input className="contact-input" type="text" placeholder="Name" />
            <input className="contact-input" type="text" placeholder="Email"/>
          </div>
          <input className="contact-input" type="text" placeholder="Subject" />
          <textarea className="contact-input" placeholder="Message" />
          <button type="sumbit" className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
