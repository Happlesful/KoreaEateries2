import React, { useState, useEffect } from "react";

function ScrollCard({ featuredRestaurants }) {
  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex(
        (prevIndex) => (prevIndex + 1) % featuredRestaurants.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredRestaurants]);

  return (
    <div className="flex flex-col justify-center items-center py-2 px-5">
      <img
        src={featuredRestaurants[featuredIndex].Image}
        alt=""
        className="h-40 w-40 cursor-pointer rounded-xl hover:opacity-80"
        onClick={() =>
          window.open(featuredRestaurants[featuredIndex].Website, "_blank")
        }
      />
      <p>{featuredRestaurants[featuredIndex].Name}</p>
    </div>
  );
}

export default ScrollCard;