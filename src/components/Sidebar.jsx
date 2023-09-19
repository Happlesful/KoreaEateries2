import React, { useEffect, useContext } from "react";
import { motion, useTransform } from "framer-motion";
import { SharedStateContext, SharedStateProvider } from "../SharedStateContext";
import { IoMdClose } from "react-icons/io";
import { BiMap, BiFoodMenu } from "react-icons/bi";
import { BsDatabaseAdd } from "react-icons/bs";
import { GitHub, Moon, Sun, HelpCircle } from "react-feather";

const Sidebar = () => {
  const {
    activeSidebar,
    setActiveSidebar,
    handleClick,
    location,
    setLocation,
    menu,
    setMenu,
    isDarkMode,
    setIsDarkMode,
    setCurrentPage,
  } = useContext(SharedStateContext);

  const locationSetter = (location) => {
    if (location === "Seoul") setLocation("서울");
    else if (location === "Busan") setLocation("부산");
    else if (location === "Daegu") setLocation("대구");
    else if (location === "Gwangju") setLocation("광주");
    else setLocation("");
  };

  const translateLocation = (location) => {
    if (location === "서울") return "Seoul";
    else if (location === "부산") return "Busan";
    else if (location === "대구") return "Daegu";
    else if (location === "광주") return "Gwangju";
    else return "";
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

  const translateMenu = (menu) => {
    if (menu === "한식") return "Korean";
    else if (menu === "일식") return "Japanese";
    else if (menu === "중식") return "Chinese";
    else if (menu === "양식") return "Western";
    else if (menu === "디저트") return "Cafe/Dessert";
    else if (menu === "분식") return "Snacks";
    else if (menu === "베이커리") return "Bakery";
    else if (menu === "치킨") return "Chicken";
    else if (menu === "바베큐") return "BBQ";
    else return "";
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
          onMouseLeave={() => {
            setActiveSidebar(false);
          }}
        >
          <div
            className="flex flex-row bg-blue-100 justify-center items-center
                my-1 text-sm cursor-pointer hover:opacity-80"
            onClick={() => {
              setLocation("");
              setMenu("");
              setCurrentPage(1);
            }}
          >
            clear selections
          </div>
          <div className="flex flex-col justify-center pb-5">
            <span className="bg-indigo-300">
              <span className="flex flex-row items-center ml-4">
                <BiMap className="mr-1" />
                Location
              </span>
            </span>
            {locations.map((loc) => {
              return (
                <span
                  className={`flex flex-row cursor-pointer hover:bg-indigo-100 ${
                    translateLocation(location) === loc ? `bg-violet-100` : ``
                  }`}
                  onClick={() => {
                    locationSetter(loc);
                    handleClick("restaurants");
                    setCurrentPage(1);
                  }}
                >
                  <p className="ml-10">{loc}</p>
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
            {menus.map((mapMenu) => {
              return (
                <span
                  className={`flex flex-row cursor-pointer hover:bg-indigo-100 ${
                    translateMenu(menu) === mapMenu ? `bg-violet-100` : ``
                  }`}
                  onClick={() => {
                    menuSetter(mapMenu);
                    handleClick("restaurants");
                    setCurrentPage(1);
                  }}
                >
                  <p className="ml-10">{mapMenu}</p>
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
          <div className="flex flex-col justify-center">
            <span className="bg-indigo-300">
              <span className="flex flex-row items-center ml-4">
                <HelpCircle className="scale-75" />
                Others
              </span>
            </span>
            <span className="flex flex-row cursor-pointer hover:bg-indigo-100">
              <span
                className="flex flex-row items-center ml-4"
                onClick={() => {
                  window.open("https://github.com/Happlesful");
                }}
              >
                <GitHub className="scale-75" />
                Go to repository
              </span>
            </span>
            <span className="flex flex-row cursor-pointer hover:bg-indigo-100">
              <span
                className="flex flex-row items-center ml-4"
                onClick={() => {
                  setIsDarkMode(!isDarkMode);
                }}
              >
                {isDarkMode ? (
                  <Moon className="scale-75" />
                ) : (
                  <Sun className="scale-75" />
                )}
                {isDarkMode ? <p>Set Dark Mode</p> : <p>Set Light Mode</p>}
              </span>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
