import React from "react";
import { QRCodeSVG } from "qrcode.react";
import Layout from "../layouts/Layout";
import cuteCat from "../../assets/img/cute-wave.gif";

export default function Paiement() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap min-h-[80vh] px-[10%] pt-[5%] md:justify-between">
        <section className="flex flex-col md:w-1/2">
          <h1 className="text-3xl font-semibold">Félicitations !</h1>
          <h2 className="text-2xl pt-4">Votre commande a bien été validé !</h2>
          <p>La team 1 vous remercie de votre achat 😊</p>
          <div className="pt-8">
            <img src={cuteCat} alt="" />
          </div>
        </section>
        <section className="py-10 md:py-8 md:w-1/2 flex flex-col items-center gap-8">
          <h2 className="text-2xl font-semibold text-center">
            Votre récapitulatif de commande :
          </h2>
          <QRCodeSVG
            value="https://www.tiktok.com/@team7funny/video/7352496780594007302"
            size="256"
          />
          <p className="text-xl">Scannez votre QR Code !</p>
        </section>
      </div>
    </Layout>
  );
}
