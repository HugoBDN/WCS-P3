import React from "react";
import copyright from "../../img/a9.png";

export default function FemmeFooter() {
  return (
    <div className="container-full items-center bg-gradient-to-r from-violet-500 to-fuchsia-500:bg-slate-950 h-40 mx-auto px-8 py-12 text-black justify-center ">
      <div className="text-align sm:text-left space-x-4 flex start md:ml-20 justify-center text-sm ">
        <p>conditions d'utilisations</p>
        <p>mentions légales</p>
        <p>NIKE journal</p>
        <p>devenir membre</p>
        <div className="ml-3 text-xs md:text-left flex justify-center">
          <img
            className="md:ml-6 text-xs flex justify-center w-4 h-4 mx-2y "
            src={copyright}
            alt=""
          />
          <p>Wild Code School P3 tout droits réservés</p>
        </div>
      </div>
    </div>
  );
}
