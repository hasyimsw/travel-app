import React from "react";
import Kelingking from "../assets/kelingking.jpg";
import RajaAmpat from "../assets/rajaAmpat.jpg";
import Rinca from "../assets/rinca.jpg";
import TanahLot from "../assets/tanahLot.jpg";
import WediKlopo from "../assets/wediKlopo.jpg";

const Destinations = () => {
  return (
    <div
      id="destinations"
      className="max-w-[1240px] mx-auto text-center py-24 px-4"
    >
      <h1 className="text-slate-800">All-Inclusive Resorts</h1>
      <p className="text-slate-600 py-2">On the Indonesia Best Beaches</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="rounded-sm object-cover h-full w-full col-span-2 md:col-span-3 row-span-2"
          src={Kelingking}
          alt="/"
        />
        <img
          className="rounded-sm object-cover h-full w-full"
          src={RajaAmpat}
          alt="/"
        />
        <img
          className="rounded-sm object-cover h-full w-full"
          src={Rinca}
          alt="/"
        />
        <img
          className="rounded-sm object-cover h-full w-full"
          src={TanahLot}
          alt="/"
        />
        <img
          className="rounded-sm object-cover h-full w-full"
          src={WediKlopo}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Destinations;
