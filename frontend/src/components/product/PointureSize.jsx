/* eslint-disable react/prop-types */
import React, { useState } from "react";

export default function PointureSize({ productById, setAddingProduct }) {
  const [chosenSize, setChosenSize] = useState({});

  const handleClick = (item) => {
    setChosenSize(item);
    const cartId = localStorage.getItem("cartId");
    const newProduct = {
      quantity: 1,
      size: item.taille,
      product_id: productById.id,
      cart_id: cartId,
    };
    setAddingProduct(newProduct);
  };

  const isShoes =
    productById &&
    productById.spc_desc &&
    productById.spc_desc.toLowerCase() === "chaussures";

  const sizes = isShoes
    ? [
        { taille: "36" },
        { taille: "37" },
        { taille: "38" },
        { taille: "39" },
        { taille: "40" },
        { taille: "41" },
        { taille: "42" },
      ]
    : [
        { taille: "XS" },
        { taille: "S" },
        { taille: "M" },
        { taille: "L" },
        { taille: "XL" },
      ];

  return (
    <div className="mt-4">
      <p className="font-semibold mb-1">
        {isShoes ? "Choisissez votre pointure" : "Choisissez votre taille"}
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {sizes.map((item) => (
          <button
            type="button"
            className={`${
              chosenSize.taille === item.taille ? "bg-slate-950 text-white" : ""
            } w-1/6 h-12 border-[0.5px] border-slate-400 rounded-[5px]`}
            onClick={() => handleClick(item)}
          >
            {item.taille}
          </button>
        ))}
        <p className="w-full h-8">
          {chosenSize && chosenSize.taille ? `(${chosenSize.taille})` : ""}
        </p>
      </div>
    </div>
  );
}
