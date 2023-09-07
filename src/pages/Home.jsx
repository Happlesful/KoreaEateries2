import React, { useEffect, useContext, useState } from "react";
import { SharedStateContext, SharedStateProvider } from "../SharedStateContext";
import matjib from "../MatJibData.json";
import { Scrollcard, ScrollImage } from "../components";
import { Restaurants } from "../pages";
import { MdFavoriteBorder } from "react-icons/md";
import { BiRestaurant } from "react-icons/bi";
import { AiOutlineHistory, AiOutlineLoading } from "react-icons/ai";

const Home = () => {
  const { handleClick, setLocation, setMenu } = useContext(SharedStateContext);

  const [featuredItems, setFeaturedItems] = useState([]);

  const todaysFeatured = () => {
    const restaurantsLength = matjib.restaurants.length;
    const indexes = [];
    for (let i = 0; i < 4; i++) {
      const value = Math.round(Math.random() * restaurantsLength);
      if (indexes.includes(value)) {
        i--;
        continue;
      }
      indexes.push(value);
    }
    const featured = indexes.map((index) => matjib.restaurants[index]);
    return featured;
  };

  useEffect(() => {
    setFeaturedItems(todaysFeatured());
  }, []);

  return (
    <>
      <div className="flex flex-col px-10 my-4">
        <section className="flex flex-col" id="home-navigation">
          <span className="flex justify-center my-2 -translate-x-36">
            Click to navigate:
          </span>
          <span className="flex flex-row justify-center">
            <span
              className="flex flex-row items-center justify-center mx-5 px-2 py-1
                     bg-violet-300 rounded-xl cursor-pointer hover:opacity-80"
              onClick={() => {
                setLocation("");
                setMenu("");
                handleClick("restaurants");
              }}
            >
              <BiRestaurant className="mx-1 animate-pulse scale-125" />
              Restaurants
            </span>
            <span
              className="flex flex-row items-center justify-center mx-5 px-2 py-1
                     bg-violet-300 rounded-xl cursor-pointer hover:opacity-80"
              onClick={() => {
                handleClick("favourites");
              }}
            >
              <MdFavoriteBorder className="mx-1 animate-pulse scale-125" />
              Favourites
            </span>
            <span
              className="flex flex-row items-center justify-center mx-5 px-2 py-1
                     bg-violet-300 rounded-xl cursor-pointer hover:opacity-80"
              onClick={() => {
                handleClick("history");
              }}
            >
              <AiOutlineHistory className="mx-1 animate-pulse scale-125" />
              History
            </span>
          </span>
        </section>
        <section className="flex flex-col pt-20" id="home-featured">
          <span className="flex justify-center my-2 -translate-x-36">
            Today's featured
          </span>
          <span className="flex flex-row justify-center items-center">
            <ScrollImage featuredRestaurants={featuredItems} />
          </span>
        </section>
        <section className="flex flex-col pt-14" id="home-others">
          <span className="flex justify-center my-2 -translate-x-24">
            Check out other dishes here
          </span>
          <span className="flex flex-col justify-center items-center">
            <span className="flex flex-row">
              <Scrollcard featuredRestaurants={todaysFeatured()} />
              <Scrollcard featuredRestaurants={todaysFeatured()} />
            </span>
            <span className="flex flex-row">
              <Scrollcard featuredRestaurants={todaysFeatured()} />
              <Scrollcard featuredRestaurants={todaysFeatured()} />
            </span>
          </span>
        </section>
      </div>
    </>
  );
};

export default Home;
