/* eslint-disable react/prop-types */
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./sidebar.css";
import { baseUrl } from "../utils/const";

export default function SideBarMobile({ setProductByCategory, setKey, id }) {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="md:hidden relative w-full h-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className=" py-1 px-4 border border-gray-300 rounded-[10px] text-xl mb-8"
      >
        Filtre
      </button>
      <CSSTransition
        in={isOpen}
        timeout={500}
        classNames="sidebar"
        unmountOnExit
      >
        <div className="sidebar absolute left-0 right-0 top-16 w-full min-h-[4/5] bg-white flex gap-4 flex-wrap pb-16">
          <button
            type="button"
            onClick={() => {
              handleToggle();
              setIsOpen(!isOpen);
            }}
            className="py-1 px-4 border border-gray-300 rounded-[10px] h-full"
          >
            Tous nos produits
          </button>
          <button
            value="tshirt"
            type="button"
            className="py-1 px-4 border border-gray-300 rounded-[10px] h-full"
            onClick={() => {
              handleClick("tshirt");
              setIsOpen(!isOpen);
            }}
          >
            T-Shirts
          </button>
          <button
            value="sweat"
            type="button"
            className="py-1 px-4 border border-gray-300 rounded-[10px] h-full"
            onClick={() => {
              handleClick("sweat");
              setIsOpen(!isOpen);
            }}
          >
            Sweats
          </button>
          <button
            value="veste"
            type="button"
            className="py-1 px-4 border border-gray-300 rounded-[10px] h-full"
            onClick={() => {
              handleClick("veste");
              setIsOpen(!isOpen);
            }}
          >
            Vestes
          </button>
          <button
            value="pantalon"
            type="button"
            className="py-1 px-4 border border-gray-300 rounded-[10px] h-full"
            onClick={() => {
              handleClick("pantalon");
              setIsOpen(!isOpen);
            }}
          >
            Pantalons
          </button>
          <button
            value="survêtement"
            type="button"
            className="py-1 px-4 border border-gray-300 rounded-[10px] h-full"
            onClick={() => {
              handleClick("survêtement");
              setIsOpen(!isOpen);
            }}
          >
            Survêtements
          </button>
          <button
            value="chaussettes"
            type="button"
            className="py-1 px-4 border border-gray-300 rounded-[10px] h-full"
            onClick={() => {
              handleClick("chaussette");
              setIsOpen(!isOpen);
            }}
          >
            Chaussettes
          </button>
          <button
            value="chaussure"
            type="button"
            className="py-1 px-4 border border-gray-300 rounded-[10px] h-full"
            onClick={() => {
              handleClick("chaussure");
              setIsOpen(!isOpen);
            }}
          >
            Chaussures
          </button>
          <button
            value="accessoire"
            type="button"
            className="py-1 px-4 border border-gray-300 rounded-[10px] h-full"
            onClick={() => {
              handleClick("accessoire");
              setIsOpen(!isOpen);
            }}
          >
            Accessoires
          </button>
        </div>
      </CSSTransition>
    </div>
  );
}
