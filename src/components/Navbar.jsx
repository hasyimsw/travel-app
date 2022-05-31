import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex w-full justify-between items-center h-20 z-10 text-white absolute px-4">
      <div>
        <h1>BEACHES.</h1>
      </div>
      <ul className="hidden md:flex">
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
      <div className="hidden md:flex">
        <BiSearch size={24} className="mr-2" />
        <BsPerson size={24} />
      </div>

      {/* hamburger menu */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={24} />
        ) : (
          <GiHamburgerMenu size={24} />
        )}
      </div>

      {/* Navbar Mobile dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-slate-800 left-0 top-0 w-full bg-white px-4 py-5 flex flex-col transition-all duration-700"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1 className="text-slate-800 mb-5">BEACHES.</h1>
          <li className="border-b border-slate-300">
            <a href="#home">Home</a>
          </li>
          <li className="border-b border-slate-300">
            <a href="#destinations">Destinations</a>
          </li>
          <li className="border-b border-slate-300">
            <a href="#travel">Travel</a>
          </li>
          <li className="border-b border-slate-300">
            <a href="#view">View</a>
          </li>
          <li className="border-b border-slate-300">
            <a href="#book">Book</a>
          </li>
          <div className="flex flex-col space-y-3 my-10">
            <button>Seacrh</button>
            <button>Account</button>
          </div>
          <div className="flex space-x-4">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
