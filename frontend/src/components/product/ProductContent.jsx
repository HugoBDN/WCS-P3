/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { baseUrl } from "../../utils/const";
import PointureSize from "./PointureSize";
import CallToActionCartWishlist from "./CallToActionCartWishlist";

export default function ProductContent({ productById }) {
  /* state déclarer qui prend comme valeur le produit en cours avec une quantité à 1 et la size sélectionné dans pointure size, ensuite on le passe en props dans callToAction et on le post au moment du click sur le bouton ajouter au panier :) */
  const [addingProduct, setAddingProduct] = useState({});
  console.info("addingProduct", addingProduct);
  return (
    <div className="md:w-1/3 md:ml-8">
      <div>
        <p className="hidden text-[1.5rem] md:flex w-full font-medium">
          {productById.name}
        </p>
        <p className="text-slate-900 text-[1.1rem] flex w-full">
          {`${productById.spc_desc} pour ${productById.pc_name}`}
        </p>
        <p className="text-slate-900 w-full font-semibold mt-2">
          {parseInt(productById.price, 10).toFixed(2)} €
        </p>
      </div>
      <div>
        <img
          src={`${baseUrl}/${productById?.img_url}`}
          alt={`Produit ${productById.id}`}
          className="w-16 h-16 object-cover rouded[5px] mt-4 text-[1.1rem]"
        />
      </div>
      <div className="mt-4">
        <p className="font-semibold mb-1 text-[1.1rem]">Description</p>
        <p>{productById.description}</p>
      </div>
      <PointureSize
        productById={productById}
        setAddingProduct={setAddingProduct}
      />
      <CallToActionCartWishlist
        addingProduct={addingProduct}
        productById={productById}
      />
    </div>
  );
}
