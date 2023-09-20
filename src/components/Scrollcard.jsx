import React, { useState, useEffect } from "react";

function ScrollCard(props) {
  const { featuredRestaurants } = props;

  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex(
        (prevIndex) => (prevIndex + 1) % featuredRestaurants.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredRestaurants]);
  //insert the name of the food on top of the image (translucent label at the top on the image)
  return (
    <div className="flex flex-col justify-center items-center py-2 px-5">
      <img
        src={featuredRestaurants[featuredIndex].Image}
        alt=""
        className="h-40 w-40 cursor-pointer rounded-xl 
        hover:opacity-90 hover:shadow-md ease-out duration-100"
        onClick={() =>
          window.open(featuredRestaurants[featuredIndex].Website, "_blank")
        }
      />
      <p className="flex flex-row flex-wrap items-center justify-center">
        {featuredRestaurants[featuredIndex].Name}
      </p>
    </div>
  );
}

export default ScrollCard;
