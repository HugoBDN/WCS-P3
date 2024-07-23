import "../../index.css";
import { Link } from "react-router-dom";
import { baseUrl } from "../../utils/const";
// import nextArrow from "../../assets/img/arrow-next.svg";
/* <img src={nextArrow} className="w-1 opacity-0" alt="" /> */

export default function VideoBaner() {
  return (
    <div>
      <div className="relative hidden md:block">
        <video
          className="w-full"
          // controls
          muted
          loop
          onLoadedData={(e) => e.target.play()}
        >
          <source
            src={`${baseUrl}/uploads/video_desktop.mp4`}
            type="video/mp4"
          />
          Votre navigateur ne prend pas en charge la lecture de vidéos HTML5.
        </video>
        <div
          className="h-48 w-full bg-opacity-40 backdrop-blur-md absolute top-0 flex flex-col justify-center items-center text-white font-medium"
          style={{ letterSpacing: "1px" }}
        >
          <p
            className="animate-slideInFromRight w-full text-center"
            style={{ fontSize: "6rem", fontWeight: "700" }}
          >
            AIR MAX DRIFT
          </p>
          <p
            className="text-center animate-afterAirMaxDrift w-1/2"
            style={{ fontSize: "1.8rem", fontWeight: "400" }}
          >
            La Air Max nouvelle génération est là.
          </p>
          <Link
            to="/product/1"
            className="bg-white w-32 h-12 text-black font-bold rounded-full bg-opacity-20 flex items-center justify-center absolute top-52 animate-fadeIn button"
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
      <div className="md:hidden mb-16">
        <video
          className="w-full"
          // controls
          muted
          loop
          onLoadedData={(e) => e.target.play()}
        >
          <source
            src={`${baseUrl}/uploads/segment0-_2_.mp4`}
            type="video/mp4"
          />
          Votre navigateur ne prend pas en charge la lecture de vidéos HTML5.
        </video>
        <div
          className="h-1/2 w-full bg-opacity-40 backdrop-blur-md flex flex-col justify-center items-center md:text-white font-medium text-black mt-6 gap-4"
          style={{ letterSpacing: "1px" }}
        >
          <p className="w-full text-center text-5xl">AIR MAX DRIFT</p>
          <p className="text-center md:w-1/2 w-4/5 text-xl">
            La Air Max nouvelle génération est là.
          </p>
          <Link
            to="/product/1"
            className="bg-black w-32 h-12 text-white font-bold rounded-full flex items-center justify-center button"
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
    </div>
  );
}
