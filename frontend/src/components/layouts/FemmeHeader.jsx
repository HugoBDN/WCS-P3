// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import React, { useState, useEffect } from "react";
import logo from "../../img/logo-nike.png";
import cart from "../../img/cart.png";
import like from "../../img/like.png";
import SearchBar from "./SearchBar";

import "./header.css";
import Login from "../login/Login";

export default function Header() {
  const [text, setText] = useState("Bienvenue dans le projet 3 de la team 1 !");
  const [slideAnimationOut, setSlideAnimationOut] = useState(false);
  const [slideAnimationIn, setSlideAnimationIn] = useState(false);
  const [showSidenav, setShowSidenav] = useState(false);
  const [mouseOverSidenav, setMouseOverSidenav] = useState(false);
  const [category, setCategory] = useState(""); // État pour stocker la catégorie survolée

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideAnimationOut(true);
      setTimeout(() => {
        setText((prevText) => {
          if (prevText === "Bienvenue dans le projet 3 de la team 1 !") {
            setSlideAnimationIn(true);
            return "Ce site est une reproduction de Nike.com réalisé dans le cadre de formation";
          }
          setSlideAnimationIn(true);
          return "Bienvenue dans le projet 3 de la team 1 !";
        });
        setSlideAnimationOut(false);
        setTimeout(() => {
          setSlideAnimationIn(false);
        }, 1000); // Durée de l'animation
      }, 1000); // Durée de l'animation
    }, 5000);

    return () => clearInterval(interval); // Nettoyer l'intervalle lors du démontage du composant
  }, []);

  return (
    <header className="md:flex relative flex-col justify-center content-center font-bold  hidden">
      <div className="relative z-20 md:flex justify-end bg-gray-200 gap-5 text-xs h-6 items-center hidden">
        <div className="flex gap-5 mr-10">
          <Link to="/magasin">Trouver un magasin</Link>
          <span>|</span>
          <div>Nous rejoindre</div>
          <span>|</span>
          <Login />
        </div>
      </div>
      <div className="relative z-20 flex justify-around items-center bg-gray-50 gap-80 h-12">
        <div className="mr-16 w-14">
          <Link to="/">
            <img className="h-full max-w-full" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex justify-center items-center h-full">
          <Link
            to="/homme"
            className="h-full flex justify-center items-center px-4"
            onMouseEnter={() => {
              setShowSidenav(true);
              setCategory("homme");
            }}
            onMouseLeave={() => setShowSidenav(false)}
          >
            Homme
          </Link>
          <Link
            to="/femme"
            className="h-full flex justify-center items-center px-4"
            onMouseEnter={() => {
              setShowSidenav(true);
              setCategory("femme");
            }}
            onMouseLeave={() => setShowSidenav(false)}
          >
            Femme
          </Link>
          <Link
            to="/enfant"
            className="h-full flex justify-center items-center px-4"
            onMouseEnter={() => {
              setShowSidenav(true);
              setCategory("enfant");
            }}
            onMouseLeave={() => setShowSidenav(false)}
          >
            Enfant
          </Link>
        </div>
        <div className=" flex items-center">
          <SearchBar />
          <div className="flex pl-4 ">
            <img
              className="w-10 h-10  hover:ring-gray-400 hover:bg-gray-400 rounded-full overflow-hidden overflow-hidden like"
              src={like}
              alt=""
            />
            <img
              className="w-10 h-10 hover:ring-gray-400 hover:bg-gray-400 rounded-full overflow-hidden overflow-hidden mb-1 "
              src={cart}
              alt=""
            />
          </div>
        </div>
      </div>
      <CSSTransition
        in={showSidenav || mouseOverSidenav}
        timeout={250}
        classNames="sidenav"
        unmountOnExit
      >
        <div
          className="h-full w-full z-10 bg-white text-black absolute left-0 right-0 top-12 sidenav flex items-center justify-center gap-4"
          onMouseEnter={() => setMouseOverSidenav(true)}
          onMouseLeave={() => setMouseOverSidenav(false)}
        >
          {category === "homme" && (
            <>
              <Link
                to="/catalogueProduit/1"
                className="inline-block "
              >{`Tous nos produits pour ${category}`}</Link>
              <Link
                to="/catalogueProduit/1/sous-categorie/2"
                className="inline-block"
              >
                Vêtements Homme
              </Link>
              <Link
                to="/catalogueProduit/1/sous-categorie/1"
                className="inline-block"
              >
                Chaussures Homme
              </Link>
              <Link
                to="/catalogueProduit/1/sous-categorie/3"
                className="inline-block"
              >
                Accessoires Homme
              </Link>
            </>
          )}
          {category === "femme" && (
            <>
              <Link to="/catalogueProduit/2">{`Tous nos produits pour ${category}`}</Link>
              <Link to="/catalogueProduit/2/sous-categorie/2">
                Vêtements Femme
              </Link>
              <Link to="/catalogueProduit/2/sous-categorie/1">
                Chaussures Femme
              </Link>
              <Link to="/catalogueProduit/2/sous-categorie/3">
                Accessoires Femme
              </Link>
            </>
          )}
          {category === "enfant" && (
            <>
              <Link to="/catalogueProduit/3">{`Tous nos produits pour ${category}`}</Link>
              <Link to="/catalogueProduit/3/sous-categorie/2">
                Vêtements Enfant
              </Link>
              <Link to="/catalogueProduit/3/sous-categorie/1">
                Chaussures Enfant
              </Link>
              <Link to="/catalogueProduit/3/sous-categorie/3">
                Accessoires Enfant
              </Link>
            </>
          )}
        </div>
      </CSSTransition>
      <div className="relative z-0 flex justify-center items-center bg-gray-200 h-20 ">
        <p
          className={`slide-text ${
            // eslint-disable-next-line no-nested-ternary
            slideAnimationOut ? "slide-out" : slideAnimationIn ? "slide-in" : ""
          }`}
        >
          {text}
        </p>
      </div>
    </header>
  );
}
