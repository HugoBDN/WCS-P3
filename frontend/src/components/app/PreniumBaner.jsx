import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import gifPrenium from "../../assets/img/gif-nike-prenium.gif";

export default function PreniumBaner() {
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY || document.documentElement.scrollTop;
  //     // Déterminez ici à quelle hauteur vous souhaitez déclencher l'animation
  //     if (scrollTop > 3400) {
  //       setIsVisible(true);
  //     } else {
  //       setIsVisible(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // console.info("isVisible", isVisible);
  return (
    <>
      <div className="h-[90vh] mt-36 md:block hidden">
        <div
          // className={`transition ease-in ${
          //   isVisible
          //     ? "animate-slidePremiumMember"
          //     : "animate-sortieMemberPremium"
          // } flex w-[80%] m-auto relative`}
          className="flex w-[80%] m-auto relative"
        >
          <div className={`w-full md:w-1/3 ml-8 `}>
            <div
              className={` absolute top-0 left-0  w-[700px] pl-12 pt-8 pb-14`}
              style={{ fontWeight: "700", border: "4px solid #FF6B00" }}
            >
              <h2
                className={`text-[4rem] z-10 relative `}
                style={{ fontWeight: "700" }}
              >
                Devenez Membres Premium !
              </h2>
              <p
                className="text-[2rem] mt-4 mb-8"
                style={{ fontWeight: "600" }}
              >
                Lorem ipsum dolor sit amet.
              </p>
              <Link
                to="/membre"
                className="w-32 h-12 mt-6 text-white font-bold rounded-full bg-opacity-90 flex items-center justify-center button bg-black hover:bg-[#FF6B00]"
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                Découvrir
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1px"
                  viewBox="0 0 24 24"
                  fill="none"
                  opacity={0}
                >
                  <path
                    d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
                    fill="#0F0F0F"
                    style={{ fill: "white" }}
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className={` relative mt-16 ml-36`}>
            <div className="w-[550px] h-[550px] bg-[#FF6B00] absolute top-0 left-0" />
            <div className="w-[550px] h-[550px] absolute top-12 left-12">
              <img
                src={gifPrenium}
                alt="gif Prenium member"
                className="w-full"
              />
            </div>
            <p
              className="text-[4rem] flex text-white z-20 absolute left-16 top-96"
              style={{ fontWeight: "700" }}
            >
              REJOINS LA COMMUNAUTÉ
            </p>
          </div>
        </div>
      </div>
      <div className="md:hidden h-screen mt-16 px-4">
        <h2 className="text-6xl text-black font-semibold pb-8">
          Devenez Membres Premium !
        </h2>
        <div className="w-full">
          <img src={gifPrenium} alt="gif Prenium member" className="w-full" />
        </div>
        <p
          className="text-3xl md:hidden flex text-black mt-4"
          style={{ fontWeight: "700" }}
        >
          REJOINS LA COMMUNAUTÉ
        </p>
        <Link
          to="/membre"
          className="w-32 h-12 mt-6 text-white font-bold rounded-full bg-opacity-90 flex items-center justify-center button bg-[#FF6B00]"
          style={{ fontSize: "1rem", fontWeight: "600" }}
        >
          Découvrir
        </Link>
      </div>
    </>
  );
}
