import React, { useEffect, useContext } from "react";
import { SharedStateContext, SharedStateProvider } from "../SharedStateContext";
import matjib from "../MatJibData.json";
import { AiOutlineLoading } from "react-icons/ai";

const Restaurants = (props) => {
  const { location, menu } = props;

  const filteredRestaurants = (location, menu) => {
    return matjib.restaurants.filter((restaurant) => {
      const locationMatches = restaurant.Location.includes(
        location.toLowerCase()
      );
      const menuMatches = restaurant.Menu.toLowerCase().includes(
        menu.toLowerCase()
      );
      return locationMatches && menuMatches;
    });
  };

  return (
    <>
      <div className="flex flex-col px-10 my-4">
        <section className="justify-center items-center pt-20">
          <span
            className="flex justify-center my-2 -translate-x-36"
            id="display-restaurant"
          >
            Restaurants
          </span>
          <span className="flex flex-row flex-wrap justify-center items-center">
            <span
              className="flex flex-row flex-wrap justify-center items-center
                w-[32rem]"
            >
              {filteredRestaurants(location, menu).map((restaurant, index) => {
                return (
                  <span
                    className="flex flex-col justify-center items-center
                            px-5 py-2"
                    key={index}
                  >
                    <img
                      src={restaurant.Image}
                      alt={<AiOutlineLoading className="animate-spin" />}
                      className="h-40 w-40 cursor-pointer rounded-xl hover:opacity-80"
                      onClick={() => window.open(restaurant.Website, "_blank")}
                    />
                    <p>{restaurant.Name}</p>
                  </span>
                );
              })}
            </span>
          </span>
        </section>
      </div>
    </>
  );
};

Restaurants.defaultProps = {
  location: "",
  menu: "",
};

export default Restaurants;
