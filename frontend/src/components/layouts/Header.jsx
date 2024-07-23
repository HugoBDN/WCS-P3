/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link, useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import React, { useState, useEffect } from "react";
import logo from "../../img/logo-nike.png";
import cart from "../../img/cart.png";
import like from "../../img/like.png";
import SearchBar from "./SearchBar";
import { baseUrl } from "../../utils/const";
import "./header.css";
import Login from "../login/Login";

export default function Header() {
  const [text, setText] = useState("Bienvenue dans le projet 3 de la team 1 !");
  const [slideAnimationOut, setSlideAnimationOut] = useState(false);
  const [slideAnimationIn, setSlideAnimationIn] = useState(false);
  const [showSidenav, setShowSidenav] = useState(false);
  const [mouseOverSidenav, setMouseOverSidenav] = useState(false);
  const [category, setCategory] = useState(""); // État pour stocker la catégorie survolée
  const [showBurgerNav, setShowBurgerNav] = useState(false);
  const [showLinkBurger, setShowLinkBurger] = useState(false);
  const [showLinkBurgerFemme, setShowLinkBurgerFemme] = useState(false);
  const [showLinkBurgerChild, setShowLinkBurgerChild] = useState(false);
  const navigate = useNavigate();

  const toggleBurger = () => {
    setShowBurgerNav(!showBurgerNav);
  };

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
    <header className="flex relative flex-col justify-center content-center font-bold">
      <div className="relative z-20 md:flex justify-end bg-gray-200 gap-5 text-xs h-6 items-center hidden">
        <div className="flex gap-5 mr-10">
          <Link to="/magasin">Trouver un magasin</Link>
          <span>|</span>
          <div>Nous rejoindre</div>
          <span>|</span>
          <Login />
        </div>
      </div>
      <div className="relative z-20 flex justify-around items-center bg-gray-50 h-12">
        <div className="mr-10 md:mr-16 w-14 ml-4 md:ml-0">
          <Link to="/">
            <img className="h-full max-w-full" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="hidden md:flex justify-center items-center h-full">
          <button
            to={`${baseUrl}/catalogueProduit/1`}
            className="h-full flex justify-center items-center px-4"
            onMouseEnter={() => {
              setShowSidenav(true);
              setCategory("homme");
            }}
            onMouseLeave={() => setShowSidenav(false)}
          >
            Homme
          </button>
          <button
            to={`${baseUrl}/product-cat/2`}
            className="h-full flex justify-center items-center px-4"
            onMouseEnter={() => {
              setShowSidenav(true);
              setCategory("femme");
            }}
            onMouseLeave={() => setShowSidenav(false)}
          >
            Femme
          </button>
          <button
            to={`${baseUrl}/product-cat/3`}
            className="h-full flex justify-center items-center px-4"
            onMouseEnter={() => {
              setShowSidenav(true);
              setCategory("enfant");
            }}
            onMouseLeave={() => setShowSidenav(false)}
          >
            Enfant
          </button>
        </div>
        <div className="flex items-center">
          <SearchBar />
          <div className="flex pl-4">
            <img
              className="hidden md:flex items-center w-10 h-10 hover:ring-gray-400 hover:bg-gray-400 rounded-full overflow-hidden like"
              src={like}
              alt=""
            />
            <Link to="/panier">
              <img
                className="w-12 md:w-10 h-12  md:h-10 hover:ring-gray-400 hover:bg-gray-400 rounded-full overflow-hidden mb-1 "
                src={cart}
                alt=""
              />
            </Link>
          </div>
          <div
            className="flex flex-col gap-1 pl-2 md:hidden pr-4"
            onClick={toggleBurger}
          >
            <span className="bg-black h-0.5 w-6" />
            <span className="bg-black h-0.5 w-6" />
            <span className="bg-black h-0.5 w-6" />
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
              <button
                className="inline-block"
                onClick={() => navigate("/catalogueProduit/1")}
              >{`Tous nos produits pour ${category}`}</button>
              <Link
                to="/catalogueProduit/1/catalogueSousProduit/2"
                className="inline-block"
              >
                Vêtements Homme
              </Link>
              <Link
                to="/catalogueProduit/1/catalogueSousProduit/1"
                className="inline-block"
              >
                Chaussures Homme
              </Link>
              <Link
                to="/catalogueProduit/1/catalogueSousProduit/3"
                className="inline-block"
              >
                Accessoires Homme
              </Link>
            </>
          )}
          {category === "femme" && (
            <>
              <button
                onClick={() => navigate("/catalogueProduit/2")}
              >{`Tous nos produits pour ${category}`}</button>
              <Link to="/catalogueProduit/2/catalogueSousProduit/2">
                Vêtements Femme
              </Link>
              <Link to="/catalogueProduit/2/catalogueSousProduit/1">
                Chaussures Femme
              </Link>
              <Link to="/catalogueProduit/2/catalogueSousProduit/3">
                Accessoires Femme
              </Link>
            </>
          )}
          {category === "enfant" && (
            <>
              <button
                onClick={() => navigate("/catalogueProduit/3")}
              >{`Tous nos produits pour ${category}`}</button>
              <Link to="/catalogueProduit/3/catalogueSousProduit/2">
                Vêtements Enfant
              </Link>
              <Link to="/catalogueProduit/3/catalogueSousProduit/1">
                Chaussures Enfant
              </Link>
              <Link to="/catalogueProduit/3/catalogueSousProduit/3">
                Accessoires Enfant
              </Link>
            </>
          )}
        </div>
      </CSSTransition>
      <div className="relative z-0 flex justify-center items-center md:bg-gray-200 bg-gray-100 h-20 ">
        <p
          className={`slide-text ${
            // eslint-disable-next-line no-nested-ternary
            slideAnimationOut ? "slide-out" : slideAnimationIn ? "slide-in" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <div
        className={`burgernav h-[100vh] overflow-hidden flex flex-col z-20 absolute bg-white justify-center md:hidden ${showBurgerNav ? "right-0" : "right-[100%]"}`}
      >
        <div
          className="closingcross flex justify-center items-end absolute right-0 pr-6 pb-20 text-xl z-30"
          onClick={toggleBurger}
        >
          x
        </div>
        <div className="burgercontent pl-8 relative">
          <div className=" flex flex-col justify-center items-start absolute">
            <button
              className="pb-4 inline-block"
              onClick={() => setShowLinkBurger(!showLinkBurger)}
            >
              HOMME
            </button>
            <div
              className={`${showLinkBurger ? "flex flex-col pb-4 font-medium" : "hidden"}`}
            >
              <Link
                className="inline-block"
                to="/catalogueProduit/1"
                onClick={toggleBurger}
              >
                Tous nos produits
              </Link>
              <Link
                to="/catalogueProduit/1/catalogueSousProduit/2"
                className="inline-block"
                onClick={toggleBurger}
              >
                Vêtements Homme
              </Link>
              <Link
                to="/catalogueProduit/1/catalogueSousProduit/1"
                className="inline-block"
                onClick={toggleBurger}
              >
                Chaussures Homme
              </Link>
              <Link
                to="/catalogueProduit/1/catalogueSousProduit/3"
                className="inline-block"
                onClick={toggleBurger}
              >
                Accessoires Homme
              </Link>
            </div>
            <button
              className="pb-4 inline-block"
              onClick={() => setShowLinkBurgerFemme(!showLinkBurgerFemme)}
            >
              FEMME
            </button>
            <div
              className={`${showLinkBurgerFemme ? "flex flex-col pb-4 font-medium" : "hidden"}`}
            >
              <Link
                className="inline-block"
                to="/catalogueProduit/2"
                onClick={toggleBurger}
              >
                Tous nos produits
              </Link>
              <Link
                to="/catalogueProduit/2/catalogueSousProduit/2"
                className="inline-block"
                onClick={toggleBurger}
              >
                Vêtements Femme
              </Link>
              <Link
                to="/catalogueProduit/2/catalogueSousProduit/1"
                className="inline-block"
                onClick={toggleBurger}
              >
                Chaussures Femme
              </Link>
              <Link
                to="/catalogueProduit/2/catalogueSousProduit/3"
                className="inline-block"
                onClick={toggleBurger}
              >
                Accessoires Femme
              </Link>
            </div>
            <button
              className="pb-4 inline-block"
              onClick={() => setShowLinkBurgerChild(!showLinkBurgerChild)}
            >
              ENFANT
            </button>
            <div
              className={`${showLinkBurgerChild ? "flex flex-col pb-4 gap-1 pl-2 font-medium" : "hidden"}`}
            >
              <Link
                className="inline-block"
                to="/catalogueProduit/3"
                onClick={toggleBurger}
              >
                Tous nos produits
              </Link>
              <Link
                to="/catalogueProduit/3/catalogueSousProduit/2"
                className="inline-block"
                onClick={toggleBurger}
              >
                Vêtements Enfant
              </Link>
              <Link
                to="/catalogueProduit/3/catalogueSousProduit/1"
                className="inline-block"
                onClick={toggleBurger}
              >
                Chaussures Enfant
              </Link>
              <Link
                to="/catalogueProduit/3/catalogueSousProduit/3"
                className="inline-block"
                onClick={toggleBurger}
              >
                Accessoires Enfant
              </Link>
            </div>
            <Link className="pt-2" to="/panier">
              MON PANIER
            </Link>
            <div className="flex pt-4 gap-1">
              <svg
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <Link
                className="inline-block"
                to="/profile"
                onClick={toggleBurger}
              >
                MON PROFIL
              </Link>
            </div>
            <Link className="pt-8" to="/magasin">
              NOS MAGASINS
            </Link>
            <div className="absolute top-[55vh]">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
