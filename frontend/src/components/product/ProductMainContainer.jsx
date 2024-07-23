/* eslint-disable react/prop-types */
import React from "react";
import ProductSlider1 from "./ProductSlider1";
import ProductContent from "./ProductContent";

export default function ProductMainContainer({ productById }) {
  return (
    <div className="flex flex-wrap w-full md:justify-center gap-4 p-8">
      <h1 className="md:hidden text-2xl font-medium">{productById.name}</h1>
      <ProductSlider1 productById={productById} />
      <ProductContent productById={productById} />
    </div>
  );
}
