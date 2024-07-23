import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../utils/const";
import "./product.css";

// eslint-disable-next-line react/prop-types
export default function SmartCart({ isClicked }) {
  const [lastProductAdded, setLastProductAdded] = useState({});
  const cartId = localStorage.getItem("cartId");
  console.info("cartId", cartId);
  useEffect(() => {
    fetch(`${baseUrl}/api/last-added-product-in-cart/${cartId}`)
      .then((res) => res.json())
      .then((data) => {
        console.info("data", data);
        setLastProductAdded(data);
      });
  }, [isClicked]);
  return (
    <div
      className={`${isClicked ? "animate-slideSmartCart absolute bg-white rounded-[5px] text-white bg-opacity-100 w-1/3 h-[50%]" : "hidden"}`}
    >
      <p className=" text-black text-[1.2rem] p-8 font-semibold">
        💙 Ajouté au panier{" "}
      </p>
      <div className="pl-8 flex items-center gap-8">
        <div className="w-[150px] h-[150px]">
          <img
            className="w-full h-full object-cover"
            src={`${baseUrl}/${lastProductAdded?.img_url}`}
            alt=""
          />
        </div>
        <div className="flex flex-col text-black gap-2 mb-4 items-start">
          <p className="text-[1.2rem] font-medium">{lastProductAdded.name}</p>
          <p className="text-[1.1rem text-slate-500">{`${lastProductAdded.sous_product_category_name} pour ${lastProductAdded.product_category_name}`}</p>
          <p className="text-[1.1rem] text-slate-500">
            {lastProductAdded.size}
          </p>
          <p className="text-[1.2rem]">{lastProductAdded.price},00 €</p>
        </div>
      </div>
      <div className="w-full flex gap-4 p-4">
        <Link
          to="/panier"
          className="text-black w-56 h-16 border-[0.5px] border-slate-800 rounded-[50px] flex items-center justify-center font-medium"
        >
          Voir mes articles
        </Link>
        <Link
          to="/paiement"
          className="w-56 h-16 bg-slate-950 rounded-[50px] text-white mb-2 flex items-center justify-center"
        >
          paiement
        </Link>
      </div>
    </div>
  );
}
