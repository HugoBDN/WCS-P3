/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { baseUrl } from "../utils/const";

export default function Vetements() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [vetements, setVetements] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/api/product-cat/2/product-sous-cat/2`)
      .then((res) => res.json())
      .then((data) => setVetements(data));
  }, []);
  console.info("toto", vetements);
  return (
    <div className="m-auto xl:w-3/5">
      <Carousel responsive={responsive} infinite={true}>
        {vetements.map((vetement) => (
          <Link
            key={vetement.id}
            className="w-full h-full cursor-pointer inline-block p-1"
            to={`/product/${vetement.id}`}
          >
            <div className="w-full h-3/4 pt-8 relative ">
              <img
                className="w-full h-full inline-block object-cover"
                // eslint-disable-next-line prettier/prettier
                key={vetement.id}
                src={`${baseUrl}/${vetement.img_url}`}
                alt="vetements"
              />
              <button
                type="submit"
                className="absolute z-10 bottom-4 right-4 rounded-[50%] w-[40px] h-[40px] bg-opacity-80 flex items-center justify-center bg-white cursor-pointer"
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 13C14.5824 13 11 16.6035 11 21.0494C11 24.6384 12.4 33.1561 26.1808 41.7666C26.4277 41.9193 26.711 42 27 42C27.289 42 27.5723 41.9193 27.8192 41.7666C41.6 33.1561 43 24.6384 43 21.0494C43 16.6035 39.4176 13 35 13C30.5824 13 27 17.8785 27 17.8785C27 17.8785 23.4176 13 19 13Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-wrap pt-4 w-full">
              <p className="text-[1.2rem] flex w-full font-medium">
                {vetement.name}
              </p>
              <p className="text-gray-500 flex w-full font-medium">{`${
                vetement.spc_name
              } pour ${vetement.pc_name.toLowerCase()}`}</p>
              <p className="flex w-full font-medium pt-2">
                {parseInt(vetement.price, 10).toFixed(2)} €
              </p>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}
