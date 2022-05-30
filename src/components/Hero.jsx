import React from "react";
import beachVid from "../assets/beachVid.mp4";
import { BiSearch } from 'react-icons/bi'

const Hero = () => {
  return (
    <div id="#home" className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full left-0 top-0 bg-gray-900/40"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1>First Class Travel</h1>
        <h2 className="py-4">Top 1% Location Worldwide</h2>
        <form action="" className="flex justify-between px-2 py-1 items-center max-w-3xl w-full mx-auto border rounded-md text-slate-800 bg-slate-200">
          <div>
            <input type="text" placeholder="Search Destinations" className="bg-transparent focus:outline-none font-[Poppins]" />
          </div>
          <div>
            <button><BiSearch size={24} className="text-white icon" style={{color: '#ffffff'}} /></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
