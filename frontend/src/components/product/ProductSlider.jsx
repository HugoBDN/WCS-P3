/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";
import { baseUrl } from "../../utils/const";

export default function ProductSlider() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/apI/new-product`)
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel flex gap-4 p-8">
      <div className="carousel-thumbnails flex flex-col w-16">
        {images.map((image, index) => (
          <img
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            src={`${baseUrl}/${image.img_url}`}
            alt={`Thumbnail ${index}`}
            className={`thumbnail ${
              activeIndex === index ? "active" : ""
            } w-full inline-block rounded-[5px] h-16 cursor-pointer object-cover mb-4`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
      <div className="carousel-container relative">
        {/* Afficher l'image active */}
        <img
          src={`${baseUrl}/${images[activeIndex]?.img_url}`}
          alt={`Slide ${activeIndex}`}
          className="w-[500px] h-[600px] object-cover rounded-md"
        />
        <div className="carousel-navigation absolute bottom-4 right-4">
          <button
            onClick={handlePrev}
            type="button"
            className="rounded-3xl w-12 h-12 bg-white opacity-40 "
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            type="button"
            className="rounded-3xl w-12 h-12 bg-white opacity-40 ml-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
