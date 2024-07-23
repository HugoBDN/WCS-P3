/* eslint-disable react/prop-types */
import React, { useState } from "react";
import CartButton from "./CartButton";
import WishlistButton from "./WishlistButton";
import SmartCart from "./SmartCart";

export default function CallToActionCartWishlist({
  addingProduct,
  productById,
}) {
  const [cart, setCart] = useState();
  const [isClicked, setIsClicked] = useState();

  return (
    <div className="flex flex-col items-center ">
      <CartButton
        cart={cart}
        setCart={setCart}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        addingProduct={addingProduct}
      />
      <WishlistButton />
      <SmartCart
        cart={cart}
        setCart={setCart}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        productById={productById}
      />
    </div>
  );
}
