/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import { baseUrl } from "../utils/const";

export default function SideBar({ setProductByCategory, setKey, id }) {
  function handleClick(toto) {
    fetch(`${baseUrl}/api/product-cat/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const filteredProducts = data.filter((product) =>
          product.img_url.toLowerCase().includes(toto)
        );
        console.info("filteredProducts", filteredProducts);
        // Update the state with the new filtered list
        setProductByCategory(filteredProducts);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }
  function handleToggle() {
    setKey((prevKey) => prevKey + 1);
  }
  return (
    <>
      <section className="md:flex w-1/5 hidden flex-col items-center md:text-lg xl:text-2xl font-semibold pt-4 h-[850px]">
        <button
          onClick={() => handleToggle()}
          className=" py-2 px-6 border text-white rounded-[10px] bg-slate-700 mb-4"
        >
          Tous nos produits
        </button>

        <button
          value="tshirt"
          type="button"
          className="mx-8 my-2"
          onClick={() => handleClick("tshirt")}
        >
          T-Shirts
        </button>
        <button
          value="sweat"
          type="button"
          className="mx-8 my-6"
          onClick={() => handleClick("sweat")}
        >
          Sweats
        </button>
        <button
          value="veste"
          type="button"
          onClick={() => handleClick("veste")}
          className="mx-8 my-4"
        >
          Vestes
        </button>
        <button
          value="pantalon"
          type="button"
          onClick={() => handleClick("pantalon")}
          className="mx-8 my-4"
        >
          Pantalons
        </button>
        <button
          value="survêtement"
          type="button"
          onClick={() => handleClick("survêtement")}
          className="mx-8 my-6"
        >
          Survêtements
        </button>
        <button
          value="chaussettes"
          type="button"
          onClick={() => handleClick("chaussettes")}
          className="mx-8 my-4"
        >
          Chaussettes
        </button>
        <button
          value="chaussure"
          type="button"
          onClick={() => handleClick("chaussure")}
          className="mx-8 my-4"
        >
          Chaussures
        </button>
        <button
          value="accessoire"
          type="button"
          onClick={() => handleClick("accessoire")}
          className="mx-8 my-4"
        >
          Accessoires
        </button>
      </section>
    </>
  );
}
