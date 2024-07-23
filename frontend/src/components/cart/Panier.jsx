/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../utils/const";
import Layout from "../layouts/Layout";
import { UserContext } from "../../context/UserContext";
import CartCard from "./CartCard";
import PaypalCheckoutButton from "../paiement/PaypalCheckoutButtonTest";

export default function Panier() {
  const { user, setUser } = useContext(UserContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/api/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setUser(res);
      })
      .catch((err) => console.info(err));
  }, [setUser]);

  console.info("user page panier", user);

  const cartId = localStorage.getItem("cartId");
  useEffect(() => {
    fetch(`${baseUrl}/api/product-in-cart/${cartId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setCart(res);
      })
      .catch((err) => console.info(err));
  }, []);

  console.info("cart api", cart);

  // const isShoes =
  //   productById &&
  //   productById.spc_desc &&
  //   productById.spc_desc.toLowerCase() === "chaussures";

  // const sizes = isShoes
  //   ? [
  //       { taille: "36" },
  //       { taille: "37" },
  //       { taille: "38" },
  //       { taille: "39" },
  //       { taille: "40" },
  //       { taille: "41" },
  //       { taille: "42" },
  //     ]
  //   : [{ taille: "S" }, { taille: "M" }, { taille: "L" }, { taille: "XL" }];

  const totalPriceByItem = cart.map(
    ({ price, quantity }) => parseFloat(price) * quantity
  );

  console.info("totalPriceByItem", totalPriceByItem);
  const totalCart = totalPriceByItem.reduce((a, b) => a + b, 0);

  const formattedTotal = parseFloat(totalCart, 10).toFixed(2);
  console.info("formattedTotal", formattedTotal);
  // const panier = {
  //   description: "commande ",
  //   price: totalCart,
  // };

  const panier = {
    description: "commande ",
    price: formattedTotal,
  };
  // console.info("panier pour paypal", panier);

  return (
    <Layout>
      <div className="flex flex-wrap md:flex-nowrap p-4 md:p-0 justify-center gap-8 md:w-[70%] m-auto md:pt-12 md:min-h-screen">
        <div className="w-full md:w-3/5">
          <div>
            {user.isLogged ? (
              <>
                <h2 className="text-2xl font-semibold">
                  Bonjour {user.data.firstname},
                </h2>
                <h3 className="text-xl font-medium mt-2">
                  Vous avez {cart.length} articles dans votre panier !
                </h3>
              </>
            ) : (
              <>
                <p className="text-red-500 text-2xl font-bold">
                  Livraison gratuite pour les membres.
                </p>
                <div className="flex gap-2">
                  <p>Tu n'es pas encore membre ?</p>
                  <Link to="/inscription" className="font-semibold">
                    Inscris toi !
                  </Link>
                </div>
                <div className="flex gap-2">
                  <p>Tu es déjà inscris?</p>
                  <Link to="/connexion" className="font-semibold">
                    Connecte-toi !
                  </Link>
                </div>
              </>
            )}
          </div>
          <div>
            <h1 className=" text-2xl font-semibold py-8">Panier</h1>
            <div className={`${user.isLogged ? "hidden" : "flex"}`}>
              Connectez-vous pour accéder à votre panier.
            </div>
            <div
              className={`${cart.length === 0 && user.isLogged ? "flex" : "hidden"}`}
            >
              Votre panier est vide...
            </div>
            <div>
              {cart.map((product) => (
                <CartCard product={product} cart={cart} setCart={setCart} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5">
          <div className="w-full">
            <div className="flex flex-col w-4/5 m-auto">
              <h2 className="text-slate-950 text-2xl font-bold pb-10 text-center">
                Récapitulatif
              </h2>
              <div>
                <div className="flex w-full justify-between pb-2">
                  <p>nombre d'article :</p>
                  <p>{cart.length}</p>
                </div>
                <div className="flex w-full justify-between pb-2">
                  <p>sous-total :</p>
                  <p>{totalCart.toFixed(2)} €</p>
                </div>
                <div className="flex w-full justify-between pb-4">
                  <p>frais de livraison :</p>
                  <p>gratuit</p>
                </div>
              </div>
              <div className="h-[1px] w-full bg-slate-200" />
              <div className="flex w-full justify-between py-4">
                <p className="text-slate-950 text-lg">Total :</p>
                <p>{totalCart.toFixed(2)} €</p>
              </div>
              <div className="h-[1px] w-full bg-slate-200" />
            </div>
            <div className="hidden flex-col gap-2 pt-8">
              <button
                type="button"
                className="min-w-80 h-12 bg-slate-950 rounded-[50px] text-white mb-2 font-semibold"
              >
                Paiement
              </button>
              <button
                type="button"
                className="min-w-80 h-12 border-[0.5px] border-slate-300 bg-slate-50 rounded-[50px] flex items-center justify-center font-semibold italic"
              >
                <p className="text-blue-700">Pay</p>
                <p className="text-blue-400">pal</p>
              </button>
            </div>
            <div className="paypal-button-container mt-8">
              <PaypalCheckoutButton panier={panier} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
