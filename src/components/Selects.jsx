import React from "react";
import Kelingking from "../assets/kelingking.jpg";
import RajaAmpat from "../assets/rajaAmpat.jpg";
import Rinca from "../assets/rinca.jpg";
import TanahLot from "../assets/tanahLot.jpg";
import WediKlopo from "../assets/wediKlopo.jpg";
import Lembongan from "../assets/lembongan.jpg";
import SelectsCard from "./SelectsCard";

const Selects = () => {
  return (
    <div
      id="view"
      className="max-w-[1240px] mx-auto py-20 px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
    >
      <SelectsCard bg={Kelingking} text="Kelingking" />
      <SelectsCard bg={RajaAmpat} text="Raja Ampat" />
      <SelectsCard bg={Rinca} text="Rinca" />
      <SelectsCard bg={TanahLot} text="Tanah Lot" />
      <SelectsCard bg={WediKlopo} text="Wedi Klopo" />
      <SelectsCard bg={Lembongan} text="Lembongan" />
    </div>
  );
};

export default Selects;
