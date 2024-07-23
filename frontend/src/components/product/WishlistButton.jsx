import React from "react";

export default function WishlistButton() {
  return (
    <>
      {" "}
      <button
        type="button"
        className="min-w-80 h-12 border-[0.5px] border-slate-950 rounded-[50px] flex items-center justify-center gap-4"
      >
        ajouter à ma wishlist
        <svg
          width="25"
          height="25"
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
    </>
  );
}
