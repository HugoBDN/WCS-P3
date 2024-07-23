/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
import React from "react";

export default function SizeCart({ product, setCart }) {
  const handleSizeChange = (productId, newSize) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((product) => {
        if (product.id === productId) {
          return { ...product, size: newSize };
        }
        return product;
      });
      return updatedCart;
    });
  };
  const sizes = [
    { taille: "36" },
    { taille: "37" },
    { taille: "38" },
    { taille: "39" },
    { taille: "40" },
    { taille: "41" },
    { taille: "42" },
  ];
  return (
    <div className="flex">
      <p className="text-[1.1rem text-slate-600">taille/pointure</p>
      <select
        name="size"
        id="size"
        value={product.size}
        onChange={(e) => handleSizeChange(product.id, e.target.value)}
      >
        {sizes.map((taille) => (
          <option key={taille.taille} value={taille.taille}>
            {taille.taille}
          </option>
        ))}
      </select>
    </div>
  );
}
