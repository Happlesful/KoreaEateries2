import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const ScrollImage = (Props) => {
  const { featuredRestaurants } = Props;

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(next, 10000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => {
    setImageIndex((index) =>
      index === 0 ? featuredRestaurants.length - 1 : index - 1
    );
  };

  const next = () => {
    setImageIndex((index) =>
      index === featuredRestaurants.length - 1 ? 0 : index + 1
    );
  };

  return (
    <div className="flex flex-col justify-center items-center p-1 outline outline-gray-700">
      <div className="relative overflow-hidden">
        <div
          className="flex flex-row w-60 h-60 items-center
            transition-transform duration-1000 ease-out"
          style={{ transform: `translateX(-${imageIndex * 100}%)` }}
        >
          {featuredRestaurants.map((restaurant, index) => (
            <>
              <img
                className={`w-60 h-60 ease-out duration-1000 relative
                        ${index === imageIndex ? "scale-100" : "scale-75"}`}
                src={restaurant.Image}
                alt="restaurant image"
              />
            </>
          ))}
        </div>
        <div
          className="absolute inset-0 flex items-center p-4 justify-between
                -left-3 -right-3"
        >
          <button
            className="p-1 rounded-3xl shadow text-grey
            bg-white opacity-50 hover:opacity-90"
            onClick={prev}
          >
            <ChevronLeft />
          </button>
          <button
            className="p-1 rounded-3xl shadow text-grey
            bg-white opacity-50 hover:opacity-90"
            onClick={next}
          >
            <ChevronRight />
          </button>
        </div>
        <span className="absolute bottom-1 right-0 left-0">
          <span className="flex justify-center items-center gap-1">
            {featuredRestaurants.map((restaurants, index) => (
              <span
                className={`rounded-3xl w-3 h-3 bg-white ${
                  index === imageIndex
                    ? "opacity-90 scale-50"
                    : "opacity-50 scale-40"
                }`}
                key={index}
              />
            ))}
          </span>
        </span>
      </div>
      <div className="flex flex-row mt-2 text-sm">
        <span
          className="flex flex-col w-60 h-14 rounded-md justify-center items-center
        bg-zinc-200 ease-in duration-200 hover:bg-zinc-300"
        >
          {featuredRestaurants.map((restaurant, index) => (
            <div
              className="flex flex-col justify-center items-center cursor-pointer 
              transition-opacity duration-1000 ease-linear"
              style={{
                opacity: imageIndex === index ? 1 : 0,
              }}
              onClick={() => {
                window.open(restaurant.Website);
              }}
            >
              <p key={index} className="text-lg">
                {imageIndex === index ? restaurant.Name : ""}
              </p>
              <p key={index + featuredRestaurants.length} className="text-xs">
                {imageIndex === index ? restaurant.Location : ""}
              </p>
            </div>
          ))}
        </span>
      </div>
    </div>
  );
};

export default ScrollImage;
