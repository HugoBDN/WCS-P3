/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from "react";

export default function QuantitiesCart({ product, setCart }) {
  const handleQuantityChange = (productId, newQuantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: newQuantity };
        }
        return product;
      });
      return updatedCart;
    });
  };
  const quantities = [
    { quantity: "1" },
    { quantity: "2" },
    { quantity: "3" },
    { quantity: "4" },
    { quantity: "5" },
    { quantity: "6" },
    { quantity: "7" },
    { quantity: "8" },
    { quantity: "9" },
    { quantity: "10" },
  ];

  return (
    <div className="flex md:pb-6">
      <p className="text-[1.1rem text-slate-600">quantité</p>
      <select
        name="quantity"
        id="quantity"
        value={product.quantity}
        onChange={(e) => handleQuantityChange(product.id, e.target.value)}
      >
        {quantities.map((quantity) => (
          <option value={quantity.quantity}>{quantity.quantity}</option>
        ))}
      </select>
    </div>
  );
}
