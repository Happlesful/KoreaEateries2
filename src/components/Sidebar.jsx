import React, { useEffect, useContext } from "react";
import { SharedStateContext, SharedStateProvider } from "../SharedStateContext";
import { IoMdClose } from "react-icons/io";
import { BiMap, BiFoodMenu } from "react-icons/bi";
import { BsDatabaseAdd } from "react-icons/bs";

const Sidebar = () => {
  const {
    activeSidebar,
    setActiveSidebar,
    handleClick,
    location,
    setLocation,
    menu,
    setMenu,
  } = useContext(SharedStateContext);

  const locationSetter = (location) => {
    if (location === "Seoul") setLocation("서울");
    else if (location === "Busan") setLocation("부산");
    else if (location === "Daegu") setLocation("대구");
    else if (location === "Gwangju") setLocation("광주");
    else setLocation("");
  };

  const menuSetter = (menu) => {
    if (menu === "Korean") setMenu("한식");
    else if (menu === "Japanese") setMenu("일식");
    else if (menu === "Chinese") setMenu("중식");
    else if (menu === "Western") setMenu("양식");
    else if (menu === "Cafe/Dessert") setMenu("디저트");
    else if (menu === "Snacks") setMenu("분식");
    else if (menu === "Bakery") setMenu("베이커리");
    else if (menu === "Chicken") setMenu("치킨");
    else if (menu === "BBQ") setMenu("바베큐");
    else setMenu("");
  };

  const locations = ["Seoul", "Busan", "Daegu", "Gwangju"];

  const menus = [
    "Korean",
    "Japanese",
    "Chinese",
    "Western",
    "Cafe/Dessert",
    "Snacks",
    "Bakery",
    "Chicken",
    "BBQ",
  ];

  return (
    <>
      {/* <div className="fixed top-0 left-0 h-screen w-52 m-0 bg-neutral-200 rounded-2xl"></div> */}
      {activeSidebar && (
        <div
          className="fixed top-0 left-0 h-screen w-48 m-0 bg-indigo-200 rounded-2xl
            z-50"
        >
          <div
            className="flex flex-row justify-center items-center bg-violet-100 rounded-2xl
            my-1 mx-1 mb-2 cursor-pointer hover:opacity-80"
            onClick={() => setActiveSidebar(!activeSidebar)}
          >
            <IoMdClose />
            Close
            <IoMdClose />
          </div>
          <div
            className="flex flex-row bg-blue-100 justify-center items-center
                my-1 text-sm cursor-pointer hover:opacity-80"
            onClick={() => {
              setLocation("");
              setMenu("");
            }}
          >
            clear all selection
          </div>
          <div className="flex flex-col justify-center pb-5">
            <span className="bg-indigo-300">
              <span className="flex flex-row items-center ml-4">
                <BiMap className="mr-1" />
                Location
              </span>
            </span>
            {locations.map((location) => {
              return (
                <span
                  className="flex flex-row cursor-pointer hover:bg-indigo-100"
                  onClick={() => {
                    locationSetter(location);
                    handleClick("restaurants");
                  }}
                >
                  <p className="ml-10">{location}</p>
                </span>
              );
            })}
          </div>
          <div className="flex flex-col justify-center pb-5">
            <span className="bg-indigo-300">
              <span className="flex flex-row items-center ml-4">
                <BiFoodMenu className="mr-1" />
                Menu
              </span>
            </span>
            {menus.map((menu) => {
              return (
                <span
                  className="flex flex-row cursor-pointer hover:bg-indigo-100"
                  onClick={() => {
                    menuSetter(menu);
                    handleClick("restaurants");
                  }}
                >
                  <p className="ml-10">{menu}</p>
                </span>
              );
            })}
          </div>
          <div className="flex flex-col justify-center pb-5">
            <span className="bg-indigo-300">
              <span className="flex flex-row items-center ml-4">
                <BsDatabaseAdd className="mr-1" /> Add restaurants
              </span>
            </span>
            <span className="flex flex-row cursor-pointer hover:bg-indigo-100">
              <p className="ml-10">General</p>
            </span>
            <span className="flex flex-row cursor-pointer hover:bg-indigo-100">
              <p className="ml-10">Favourites</p>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
