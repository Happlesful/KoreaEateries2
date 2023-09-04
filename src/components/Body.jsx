import React, { useEffect, useContext } from "react";
import { SharedStateContext, SharedStateProvider } from "../SharedStateContext";
import { Home, Restaurants } from "../pages";

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
      </div>
    </>
  );
};

export default Body;
