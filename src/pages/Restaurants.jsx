import React, { useEffect, useContext, useState } from "react";
import { SharedStateContext, SharedStateProvider } from "../SharedStateContext";
import matjib from "../MatJibData.json";
import { AiOutlineLoading } from "react-icons/ai";
import { Pagination } from "../components";

const Restaurants = (props) => {
  const { location, menu } = props;
  const { currentPage } = useContext(SharedStateContext);

  const itemsPerPage = 20;

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

  const showCurrentPage = (pageNumber) => {
    const currPage = [];
    const restaurant = filteredRestaurants(location, menu);
    const startIndex = currentPage * 20 - 19;
    restaurant.map((item, index) => {
      if (index >= startIndex && index <= currentPage * 20) {
        currPage.push(item);
      }
    });
    return currPage;
  };

  return (
    <>
      <div className="flex flex-col px-10 my-1">
        <section className="justify-center items-center pt-5">
          {filteredRestaurants(location, menu).length === 0 ? (
            <span className="flex flex-row justify-center items-center m-5 text-lg">
              No restaurants found
            </span>
          ) : (
            <>
              <span
                className="flex justify-center my-1 -translate-x-36"
                id="display-restaurant"
              >
                Restaurants
              </span>
              <span className="flex flex-row flex-wrap justify-center items-center">
                <span
                  className="flex flex-row flex-wrap justify-center items-center
                w-[32rem]"
                >
                  {showCurrentPage(currentPage).map((restaurant, index) => {
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
                          onClick={() =>
                            window.open(restaurant.Website, "_blank")
                          }
                        />
                        <p className="flex flex-row flex-wrap items-center justify-center">
                          {restaurant.Name}
                        </p>
                      </span>
                    );
                  })}
                </span>
              </span>
              <Pagination restaurants={filteredRestaurants(location, menu)} />
            </>
          )}
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
