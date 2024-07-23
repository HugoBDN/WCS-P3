import React from "react";
import "../../index.css";

export default function BandeauDefilant() {
  return (
    <div className="h-[22vh] hidden md:block overflow-hidden">
      <div className="animate-bandeauDefilant flex flex-nowrap md:w-[440%]  gap-[5rem] items-center ">
        <p
          className="text-[8rem] whitespace-no-wrap flex"
          style={{ fontWeight: "700" }}
        >
          PROJET 3
        </p>
        <p
          className="pl-[8rem] text-[8rem] whitespace-no-wrap flex"
          style={{ fontWeight: "700" }}
        >
          WILD CODE SCHOOL
        </p>
        <p
          className="pl-[15rem] whitespace-no-wrap flex text-[4rem]"
          style={{ fontWeight: "700" }}
        >
          CE SITE EST UN CLONE
        </p>
        <p
          className="text-[8rem] pl-[15rem] whitespace-no-wrap flex"
          style={{ fontWeight: "700" }}
        >
          PROJET 3
        </p>
        <p
          className="pl-[8rem] text-[8rem] whitespace-no-wrap flex"
          style={{ fontWeight: "700" }}
        >
          WILD CODE SCHOOL
        </p>
        <p
          className="pl-[15rem] whitespace-no-wrap flex text-[4rem]"
          style={{ fontWeight: "700" }}
        >
          CE SITE EST UN CLONE
        </p>
      </div>
    </div>
  );
}
