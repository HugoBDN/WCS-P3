/* eslint-disable react/jsx-boolean-value */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import enCeMoment11 from "../assets/img/homme_moment1.jpg";
import enCeMoment12 from "../assets/img/homme_moment2.jpg";
import enCeMoment13 from "../assets/img/homme_moment 3.jpg";

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
        <img className="w-full " src={enCeMoment11} alt="en ce moment11" />
        <img className="w-full " src={enCeMoment12} alt="en ce moment12" />
        <img className="w-full " src={enCeMoment13} alt="en ce moment13" />
      </Carousel>
    </div>
  );
}
