/* eslint-disable react/prop-types */
import React from "react";
import { baseUrl } from "../../utils/const";

// eslint-disable-next-line react/prop-types
export default function ProductSlider1({ productById }) {
  return (
    <div className="md:w-[500px] md:h-[600px] w-full">
      <img
        src={`${baseUrl}/${productById.img_url}`}
        alt={`Produit ${productById.id}`}
        className="w-full md:w-[500px] md:h-[600px] object-cover rounded-md"
      />
    </div>
  );
}
