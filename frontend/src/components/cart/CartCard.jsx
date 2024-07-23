/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from "react";
import { baseUrl } from "../../utils/const";
import trash from "../../assets/img/delete.png";
import SizeCart from "./SizeCart";
import QuantitiesCart from "./QuantitiesCart";

export default function CartCard({ product, setCart }) {
  const handleDeleteProduct = (productId) => {
    setCart((prevCart) => {
      return prevCart.filter((product) => product.id !== productId);
    });
  };

  return (
    <div className="flex gap-4 md:pb-4">
      <div className="w-[100px] h-[100px] md:h-40 md:w-40">
        <img
          src={`${baseUrl}/${product.img_url}`}
          alt="produit"
          className="w-full h-full inline-block object-cover"
        />
      </div>
      <div className="md:flex-col">
        <div className="flex w-full flex-col md:flex-row md:justify-between md:w-96 pb-1">
          <p className="text-[1.2rem] font-medium">{product.name}</p>
          <p>{(parseFloat(product.price) * product.quantity).toFixed(2)} €</p>
        </div>
        <div className="text-[1.1rem text-slate-600">
          {`${product.sous_product_category_name} pour ${product.product_category_name}`}
        </div>
        <div>
          <SizeCart product={product} setCart={setCart} />
          <QuantitiesCart product={product} setCart={setCart} />
        </div>
        <div className="flex gap-1 mb-4 md:mb-0">
          <button type="button">
            <svg
              width="35"
              height="35"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 13C14.5824 13 11 16.6035 11 21.0494C11 24.6384 12.4 33.1561 26.1808 41.7666C26.4277 41.9193 26.711 42 27 42C27.289 42 27.5723 41.9193 27.8192 41.7666C41.6 33.1561 43 24.6384 43 21.0494C43 16.6035 39.4176 13 35 13C30.5824 13 27 17.8785 27 17.8785C27 17.8785 23.4176 13 19 13Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button type="button" onClick={() => handleDeleteProduct(product.id)}>
            <img src={trash} alt="" className="inline-block w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
