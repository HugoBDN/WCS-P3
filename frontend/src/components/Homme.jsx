/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import CarouselHommes from "./CarouselHommes";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import SliderHommes1 from "./SlidersHommes1";
import SliderHommes2 from "./SliderHommes2";
import SliderHommes3 from "./SliderHommes3";
import imagePrincipale from "../assets/img/homme_principal.jpg";

export default function Hommes() {
  return (
    <>
      <Header />
      <main className="ring-1 ring-slate-900/5 shadow-xl">
        <div>
          <img
            className="w-full h-[65vh] md:h-[80vh] object-cover"
            src={imagePrincipale}
            alt="image principale"
          />
        </div>
        <section>
          <h1 className=" dark:text-black md:font-sans text-5xl font-bold underline decoration-solid flex justify-center pt-6 ">
            Nos catégories pour Hommes
          </h1>
          <h2 className="dark:text-black md:font-sans text-4xl m-4">
            En ce moment
          </h2>
          <CarouselHommes en ce moment />
        </section>
        <section>
          <h3 className=" dark:text-black md:font-sans text-5xl m-4 font-bold flex justify-center ">
            Vêtements
          </h3>
          <SliderHommes1 />
        </section>
        <section>
          <h4 className=" dark:text-black md:font-sans text-5xl m-4 font-bold flex justify-center ">
            Chaussures
          </h4>
          <SliderHommes2 />
        </section>
        <section>
          <h5 className=" dark:text-black md:font-sans text-5xl m-4 font-bold flex justify-center ">
            Accessoires
          </h5>
          <SliderHommes3 />
        </section>
      </main>
      <Footer />
    </>
  );
}
