/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import CarouselEnfants from "./CarouselEnfants";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import SliderEnfants1 from "./SliderEnfants1";
import SliderEnfants2 from "./SliderEnfants2";
import SliderEnfants3 from "./SliderEnfants3";
import imagePrincipale from "../assets/img/enfant-collection.jpg";

export default function Enfants() {
  return (
    <>
      <Header />
      <main className="ring-1 ring-slate-900/5 shadow-xl">
        <div>
          <img
            className="w-full"
            src={imagePrincipale}
            alt="image principale"
          />
        </div>
        <section>
          <h1 className=" dark:text-black md:font-sans text-5xl font-bold underline decoration-solid flex justify-center pt-6 ">
            Nos catégories pour Enfants
          </h1>
          <h2 className="dark:text-black md:font-sans text-4xl m-4">
            En ce moment
          </h2>
          <CarouselEnfants en ce moment />
        </section>
        <section>
          <h3 className=" dark:text-black md:font-sans text-5xl m-4 font-bold flex justify-center ">
            Vêtements
          </h3>
          <SliderEnfants1 />
        </section>
        <section>
          <h4 className=" dark:text-black md:font-sans text-5xl m-4 font-bold flex justify-center ">
            Chaussures
          </h4>
          <SliderEnfants2 />
        </section>
        <section>
          <h5 className=" dark:text-black md:font-sans text-5xl m-4 font-bold flex justify-center ">
            Accessoires
          </h5>
          <SliderEnfants3 />
        </section>
      </main>
      <Footer />
    </>
  );
}
