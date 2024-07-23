/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { baseUrl } from "../../utils/const";

export default function SliderCaroussel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1920 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
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

  const [firstSliderArray] = useState([
    {
      id: 1,
      description: "Bientôt disponible : Air Max Dn",
      imgUrl: "uploads/slider-main-01.jpg",
      type: "img",
    },
    {
      id: 2,
      description: "Dernières sorties",
      imgUrl: "uploads/slider-main02.jpeg",
      type: "img",
    },
    {
      id: 3,
      description: "Meilleures ventes",
      imgUrl: "uploads/slider-main-03.mp4",
      type: "mp4",
    },
    {
      id: 4,
      description: "Équipement de running",
      imgUrl: "uploads/slider-main02.jpeg",
      type: "img",
    },
    {
      id: 5,
      description: "Exclusivitées membres Prenium",
      imgUrl: "uploads/slider-main-05.png",
      type: "img",
    },
  ]);

  return (
    <div className="pl-[5%] pr-[2%] pt-[5%] pb-[5%]">
      <p className="text-[1.8rem] pt-4 pb-8">En ce moment</p>
      <Carousel responsive={responsive} className="flex gap-4" infinite>
        {firstSliderArray.map((item) =>
          item.type === "mp4" ? (
            <div key={item.id} className="md:w-[440px]">
              <video muted loop onLoadedData={(e) => e.target.play()}>
                <source
                  src={`${baseUrl}/${item.imgUrl}`}
                  type="video/mp4"
                  className="w-full inline-block"
                />
                Your browser does not support the video tag.
              </video>
              <p className="pt-8 text-[1.3rem]">{item.description}</p>
            </div>
          ) : (
            <div key={item.id} className="md:w-[440px]">
              <img
                src={`${baseUrl}/${item.imgUrl}`}
                className="w-full inline-block"
                alt={item.description}
              />
              <p className="pt-8 text-[1.3rem]">{item.description}</p>
            </div>
          )
        )}
      </Carousel>
    </div>
  );
}
