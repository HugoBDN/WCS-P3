/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import { PayPalButtons } from "@paypal/react-paypal-js";
// import { shape } from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaypalCheckoutButton(props) {
  const navigate = useNavigate();
  const { panier } = props;
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderID) => {
    // call backend function to filfull order
    console.info("orderID", orderID);

    // if res is success
    setPaidFor(true);
    // refresh user's account or subscription status

    // if res is error
    // toastify => err : "Votre paiement a bien été pris en compte, cependant ..."
  };
  if (paidFor) {
    navigate("/paiement");
  }
  if (error) {
    // display a error message / modal / redirect to error page
    alert(error);
  }

  return (
    <PayPalButtons
      style={{
        color: "silver",
        height: 48,
        // layout: "horizontal",
        tagline: false,
        shape: "pill",
      }}
      onClick={(data, actions) => {
        const hasAlreadyBought = false;
        if (hasAlreadyBought) {
          setError("you already buy it");
          return actions.reject();
        }
        return actions.resolve();
      }}
      createOrder={(data, actions) => {
        console.info("panier", panier.price, panier.description);
        return actions.order.create({
          purchase_units: [
            {
              description: panier.description,
              amount: {
                value: 300.0,
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        console.info("order", order);

        handleApprove(data.orderID);
      }}
      onCancel={() => {
        // display message modal or redirect user to cancel page or back to cart
      }}
      onError={(err) => {
        setError(err);
        console.error("paypal checkout onError", err);
      }}
    />
  );
}
