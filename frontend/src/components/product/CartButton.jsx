/* eslint-disable react/prop-types */
import React from "react";
import { baseUrl } from "../../utils/const";

export default function CartButton({ isClicked, setIsClicked, addingProduct }) {
  const handleIsClicked = async () => {
    try {
      // Envoyer le produit au serveur
      const response = await fetch(`${baseUrl}/api/product-in-cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
        body: JSON.stringify(addingProduct),
      });

      if (!response.ok) {
        throw new Error("Failed to add product to cart");
      }
      setIsClicked(!isClicked);
      console.info("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };
  return (
    <button
      onClick={handleIsClicked}
      type="button"
      className="min-w-80 h-12 bg-slate-950 rounded-[50px] text-white mb-2"
    >
      ajouter au panier
    </button>
  );
}
