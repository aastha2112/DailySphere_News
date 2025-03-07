import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100 hidden lg:flex lg:flex-col md:flex md:flex-col md:gap-4 ">
      <div className=" lg:flex md:flex lg:justify-evenly md:justify-evenly lg:p-8">
        {/* div with title and socials */}
        <div className="flex flex-col w-1/3 gap-3 md:p-3">
          <h3 className="text-2xl font-bold md:pt-2">DailySphere</h3>
          <p>Stay updated!</p>
          <div className="flex gap-4 text-gray-600 text-xl py-2">
            <FaFacebookF className="cursor-pointer hover:text-blue-600 transition" />
            <FaTwitter className="cursor-pointer hover:text-blue-400 transition" />
            <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
          </div>
        </div>
        {/* divs containing careers, t&c , policies */}
        <div className=" flex justify-between w-1/3 md:w-1/2">
          <div className=" md:mt-2">
            <h1 className="text-xl font-bold text-black p-3">Help</h1>
            <p className="text-md text-gray-500 px-3 py-1 hover:underline hover:text-gray-800">
              FAQs
            </p>
            <p className="text-md text-gray-500 px-3 py-1 hover:underline hover:text-gray-800">
              Contact us
            </p>
          </div>
          <div className="md:mt-2">
            <h1 className="text-xl font-bold text-black p-3">Company</h1>
            <p className="text-md text-gray-500 px-3 py-1 hover:underline hover:text-gray-800">
              Privacy Policy
            </p>
            <p className="text-md text-gray-500 px-3 py-1 hover:underline hover:text-gray-800">
              Terms & Conditions
            </p>
          </div>
          <div className="md:mt-2">
            <h1 className="text-xl font-bold text-black p-3">Community</h1>
            <p className="text-md text-gray-500 px-3 py-1 hover:underline hover:text-gray-800">
              Subscribe
            </p>
            <p className="text-md text-gray-500 px-3 py-1 hover:underline hover:text-gray-800">
              Team
            </p>
            <p className="text-md text-gray-500 px-3 py-1 hover:underline hover:text-gray-800">
              Careers
            </p>
          </div>{" "}
        </div>
      </div>
      {/* right reserved */}
      <div className="flex justify-center">
        <p className="text-gray-700 p-3 font-bold">
          &copy; Aastha, 2025. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
