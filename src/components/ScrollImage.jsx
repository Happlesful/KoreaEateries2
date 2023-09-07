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
    <div className="flex flex-col justify-center items-center">
      <div className="relative overflow-hidden">
        <div
          className="flex flex-row w-72 h-72 items-center
            transition-transform duration-1000 ease-out"
          style={{ transform: `translateX(-${imageIndex * 102}%)` }}
        >
          {featuredRestaurants.map((restaurant, index) => (
            <>
              <a
                href={restaurant.Website}
                target="_blank"
                className="bg-slate-300 p-1 rounded-lg hover:opacity-80 flex flex-col"
              >
                {restaurant.Name}
              </a>
              <img
                className={`w-60 h-60 mx-4 p-1 ease-out duration-1000 relative
                        ${index === imageIndex ? "scale-100" : "scale-75"}`}
                src={restaurant.Image}
                alt="restaurant image"
              />
            </>
          ))}
        </div>
        <div
          className="absolute inset-0 flex items-center p-4 justify-between
                left-4 -right-2"
        >
          <button
            className="p-1 rounded-3xl shadow text-grey
            bg-white opacity-80 hover:opacity-100"
            onClick={prev}
          >
            <ChevronLeft />
          </button>
          <button
            className="p-1 rounded-3xl shadow text-grey
            bg-white opacity-80 hover:opacity-100"
            onClick={next}
          >
            <ChevronRight />
          </button>
        </div>
        <span className="absolute bottom-8 right-0 left-8">
          <span className="flex justify-center items-center gap-1">
            {featuredRestaurants.map((restaurants, index) => (
              <span
                className={`rounded-3xl w-3 h-3 bg-white ${
                  index === imageIndex
                    ? "opacity-80 scale-75"
                    : "opacity-30 scale-50"
                }`}
                key={index}
              />
            ))}
          </span>
        </span>
      </div>
      <span>
        <p className="flex justify-center text-xs">
          click on the name to open the website
        </p>
      </span>
    </div>
  );
};

export default ScrollImage;
