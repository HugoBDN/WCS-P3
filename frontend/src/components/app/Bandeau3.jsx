import React from "react";
import "../../index.css";

export default function Bandeau3() {
  return (
    <div className={` h-[12vh] overflow-hidden mt-16 bg-[#FF6B00]`}>
      <div className="animate-bandeauDefilant2 h-full flex flex-nowrap w-[400%]  gap-[5rem] items-center text-white">
        <p
          className="text-[4rem] whitespace-no-wrap flex"
          style={{ fontWeight: "600" }}
        >
          DEVIENS MEMBRE !
        </p>
        <p
          className="pl-[15rem] whitespace-no-wrap flex text-[2.5rem]"
          style={{ fontWeight: "650" }}
        >
          livraison GRATUITE
        </p>
        <p
          className="pl-[15rem] whitespace-no-wrap flex text-[2.5rem]"
          style={{ fontWeight: "650" }}
        >
          EXCLUSIVITÉS !
        </p>
        <p
          className="pl-[15rem] whitespace-no-wrap flex text-[2.5rem]"
          style={{ fontWeight: "600" }}
        >
          PRÉ-COMMANDES
        </p>
        <p
          className="pl-[8rem] text-[4rem] whitespace-no-wrap flex"
          style={{ fontWeight: "700" }}
        >
          REJOINS LA COMUNAUTÉE
        </p>
        <p
          className="pl-[15rem] whitespace-no-wrap flex text-[2.5rem]"
          style={{ fontWeight: "600" }}
        >
          Livraison GRATUITE
        </p>
        <p
          className="pl-[15rem] whitespace-no-wrap flex text-[2.5rem]"
          style={{ fontWeight: "600" }}
        >
          EXCLUSIVITÉS !
        </p>
        <p
          className="pl-[8rem] text-[4rem] whitespace-no-wrap flex"
          style={{ fontWeight: "700" }}
        >
          DEVIENS MEMBRE !
        </p>
      </div>
    </div>
  );
}
