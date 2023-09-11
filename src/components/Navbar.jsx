import React, { useEffect, useContext } from "react";
import { SharedStateContext, SharedStateProvider } from "../SharedStateContext";
import { AddMenu, FavRestaurants, Login, Menu, Restaurants } from "../pages";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const { activeSidebar, setActiveSidebar, handleClick, setMenu, setLocation } =
    useContext(SharedStateContext);
  return (
    <>
      <div
        className="w-screen h-28
        flex flex-col justify-center items-center
        bg-blue-200 -z-50"
      >
        <div className="flex flex-row justify-center items-center">
          <span>
            <AiOutlineMenu
              className="relative end-4 scale-150 cursor-pointer"
              onClick={() => {
                setActiveSidebar(false);
              }}
              onMouseEnter={() => {
                setActiveSidebar(true);
              }}
            />
          </span>
          <span
            className="w-16 h-16 mt-1 mb-5 cursor-pointer"
            onClick={() => {
              handleClick("home");
              setActiveSidebar(false);
              setMenu("");
              setLocation("");
            }}
          >
            <img src="./hanokIcon.png" alt="website logo" />
          </span>
          <span>
            <AiOutlineMenu
              className="relative start-4 scale-150 cursor-pointer"
              onClick={() => {
                setActiveSidebar(false);
              }}
              onMouseEnter={() => {
                setActiveSidebar(true);
              }}
            />
          </span>
        </div>
        <div className="flex flex-row items-center justify-center h-0">
          <p className="text-xs">Hover on the lines to open up the menu bar</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
