/* eslint-disable react/jsx-boolean-value */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import enCeMoment1 from "../assets/img/femme_img1.jpg";
import enCeMoment2 from "../assets/img/femme_img2.jpg";
import enCeMoment3 from "../assets/img/femme_img3.jpg";
import enCeMoment4 from "../assets/img/femme_img4.jpg";
import enCeMoment5 from "../assets/img/femme_img5.jpg";
import enCeMoment6 from "../assets/img/femme_img6.jpg";

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
        <img className="w-full " src={enCeMoment1} alt="en ce moment1" />
        <img className="w-full " src={enCeMoment2} alt="en ce moment2" />
        <img className="w-full " src={enCeMoment3} alt="en ce moment3" />
        <img className="w-full " src={enCeMoment4} alt="en ce moment4" />
        <img className="w-full " src={enCeMoment5} alt="en ce moment5" />
        <img className="w-full " src={enCeMoment6} alt="en ce moment6" />
      </Carousel>
    </div>
  );
}
