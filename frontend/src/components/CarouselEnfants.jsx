/* eslint-disable react/jsx-boolean-value */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import enCeMoment8 from "../assets/img/enfant-collection1.jpg";
import enCeMoment9 from "../assets/img/enfant-collection2.jpg";
import enCeMoment10 from "../assets/img/enfant-collection3.png";

export default function Carousels() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="m-auto xl:w-3/5">
      <Carousel responsive={responsive} infinite={true} swipeable={false}>
        <img className="w-full " src={enCeMoment8} alt="en ce moment8" />
        <img className="w-full " src={enCeMoment9} alt="en ce moment9" />
        <img className="w-full " src={enCeMoment10} alt="en ce moment10" />
      </Carousel>
    </div>
  );
}
