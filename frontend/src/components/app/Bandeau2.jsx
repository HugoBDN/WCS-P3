import React from "react";
import "../../index.css";

export default function Bandeau2() {
  return (
    <div className="h-[20vh] overflow-hidden mt-14 mb-24 bg-slate-950">
      <div className="animate-bandeauDefilant2 hidden md:flex flex-nowrap w-[480%]  gap-[5rem] items-center text-white">
        <p
          className="text-[6rem] whitespace-no-wrap flex "
          style={{ fontWeight: "700" }}
        >
          AIR MAX DRIFT
        </p>
        <p className="pl-[4rem] text-[6rem]">-</p>
        <p
          className="pl-[4rem] text-[6rem] whitespace-no-wrap flex"
          style={{ fontWeight: "700" }}
        >
          {" "}
          NOUVELLE GÉNÉRATION
        </p>
        <p className="pl-[4rem] text-[6rem]">-</p>
        <p
          className="text-[6rem] pl-[4rem] whitespace-no-wrap flex"
          style={{ fontWeight: "700" }}
        >
          AIR MAX DRIFT
        </p>
        <p className="pl-[4rem] text-[6rem]">-</p>
        <p
          className="pl-[4rem] text-[6rem] whitespace-no-wrap flex"
          style={{ fontWeight: "700" }}
        >
          NOUVELLE GÉNÉRATION{" "}
        </p>
        <p className="pl-[4rem] text-[6rem]">-</p>
        <p
          className="text-[6rem] pl-[4rem] whitespace-no-wrap flex"
          style={{ fontWeight: "700" }}
        >
          AIR MAX DRIFT
        </p>
        <p className="pl-[4rem] text-[6rem]">-</p>
        <p
          className="pl-[4rem] text-[6rem] whitespace-no-wrap flex"
          style={{ fontWeight: "700" }}
        >
          NOUVELLE GÉNÉRATION{" "}
        </p>
      </div>
    </div>
  );
}
