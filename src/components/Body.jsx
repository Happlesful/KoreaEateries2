import React, { useEffect, useContext } from "react";
import { SharedStateContext, SharedStateProvider } from "../SharedStateContext";
import { Home, Restaurants, Favourites, History } from "../pages";

const Body = () => {
  const {
    handleClick,
    isClicked,
    location,
    setLocation,
    menu,
    setMenu,
    activeSidebar,
    setActiveSidebar,
  } = useContext(SharedStateContext);

  useEffect(() => {
    handleClick("home");
  }, []);

  return (
    <>
      <div
        onClick={() => {
          setActiveSidebar(false);
        }}
      >
        {isClicked.home && <Home />}
        {isClicked.restaurants && (
          <Restaurants location={location} menu={menu} />
        )}
        {isClicked.favourites && <Favourites />}
        {isClicked.history && <History />}
      </div>
    </>
  );
};

export default Body;
