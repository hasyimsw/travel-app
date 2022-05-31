import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-slate-200 pt-16 ">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4 mb-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1>BEACHES.</h1>
          <div className="flex space-x-3 my-4 w-full sm:justify-end justify-start">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
          </div>
        </div>

        <div className="flex justify-between">
          <ul className="lg:flex">
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className="text-right lg:flex">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#destinations">Destinations</a>
            </li>
            <li>
              <a href="#travel">Travel</a>
            </li>
            <li>
              <a href="#view">View</a>
            </li>
            <li>
              <a href="#book">Book</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm bg-slate-900 border-t-2 text-slate-200 border-slate-200 py-4">
        &copy; 2022 &#124; coded with ❤️ by Hasyim (aka Kicuyy)
      </p>
    </div>
  );
};

export default Footer;
