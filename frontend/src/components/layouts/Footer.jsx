import React from "react";
import copyright from "../../img/a9.png";

export default function Footer() {
  return (
    <div className=" container-full items-center bg-black h-40 mx-auto py-12 px-8 text-white">
      <div className="text-align md:text-left space-x-4 flex start md:ml-20 justify-center text-sm">
        <p>conditions d'utilisations</p>
        <p>mentions légales</p>
        <p>NIKE journal</p>
        <p>devenir membre</p>
      </div>
      <div className="ml-3 text-xs md:text-left flex justify-center">
        <img
          className=" md:ml-6 text-xs flex justify-center w-4 h-4 mx-2 "
          src={copyright}
          alt=""
        />
        <p>Wild Code School P3 tout droits réservés</p>
      </div>
    </div>
  );
}
