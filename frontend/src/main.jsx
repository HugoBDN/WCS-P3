/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { UserProvider } from "./context/UserContext";
import App from "./App";
import UserForm from "./components/create-user/UserForm";
import Femmes from "./components/Femme";
import Hommes from "./components/Homme";
import LoginForm from "./components/login/LoginForm";
import Product from "./components/product/Product";
import Membre from "./components/membre/Membre";
import Panier from "./components/cart/Panier";
import Paiement from "./components/paiement/Paiement";
import Store from "./components/store/Map";
import Profile from "./components/Profile";
import SearchBar from "./components/layouts/SearchBar";
import Enfants from "./components/Enfant";
import PaiementValidation from "./components/validation/PaiementValidation";
import CatalogueProduct from "./components/CatalogueProduct";
import CatalogueSousProduct from "./components/CatalogueSousProduct";

import OrderDetails from "./components/orderDetails/OrderDetails";
// const paypalKey = import.meta.env.VITE_PAYPAL_CLIENT_ID;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/order-details",
    element: <OrderDetails />,
  },
  {
    path: "/searchbar",
    element: <SearchBar />,
  },
  {
    path: "/homme",
    element: <Hommes />,
  },
  {
    path: "/femme",
    element: <Femmes />,
  },
  {
    path: "/enfant",
    element: <Enfants />,
  },
  {
    path: "/inscription",
    element: <UserForm />,
  },
  {
    path: "/connexion",
    element: <LoginForm />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/membre",
    element: <Membre />,
  },
  {
    path: "/panier",
    element: <Panier />,
  },
  {
    path: "/paiement",
    element: <Paiement />,
  },
  {
    path: "/magasin",
    element: <Store />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/validation",
    element: <PaiementValidation />,
  },
  {
    path: "/catalogueProduit/:id",
    element: <CatalogueProduct />,
  },
  {
    path: "/catalogueProduit/:id/catalogueSousProduit/:idSousProduct",
    element: <CatalogueSousProduct />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <PayPalScriptProvider
    options={{ "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID }}
  >
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </PayPalScriptProvider>
);
