/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import Carousel from "./CarouselFemmes";
import Layout from "./layouts/Layout";
import SliderFemmes1 from "./SliderFemmes1";
import SliderFemmes2 from "./SliderFemmes2";
import SliderFemmes3 from "./SliderFemmes3";
import imagePrincipale from "../assets/img/femme_principale.png";

export default function Femmes() {
  return (
    <Layout>
      <main className=" bg-gradient-to-r from-violet-500 to-fuchsia-500:bg-slate-950 ring-1 ring-slate-900/5 shadow-xl">
        <div>
          <img
            className="h-[70vh] md:h-[80vh] md:w-full object-cover"
            src={imagePrincipale}
            alt="image principale"
          />
        </div>
        <section>
          <h1 className=" dark:text-black md:font-sans text-5xl font-bold underline decoration-solid flex justify-center pt-6 ">
            Nos catégories pour Femmes
          </h1>
          <h2 className="dark:text-black md:font-sans text-4xl m-4">
            En ce moment
          </h2>
          <Carousel en ce moment />
        </section>
        <section>
          <h3 className=" dark:text-black md:font-sans text-5xl m-4 font-bold flex justify-center ">
            Vêtements
          </h3>
          <SliderFemmes1 />
        </section>
        <section>
          <h4 className=" dark:text-black md:font-sans text-5xl m-4 font-bold flex justify-center ">
            Chaussures
          </h4>
          <SliderFemmes2 />
        </section>
        <section>
          <h5 className=" dark:text-black md:font-sans text-5xl m-4 font-bold flex justify-center ">
            Accessoires
          </h5>
          <SliderFemmes3 />
        </section>
      </main>
    </Layout>
  );
}
