import React, { createContext, useState, useEffect } from "react";

const SharedStateContext = createContext();

const initialState = {
  home: false,
  restaurants: false,
  favourites: false,
  history: false,
};

const SharedStateProvider = ({ children }) => {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [isClicked, setIsClicked] = useState(initialState);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [location, setLocation] = useState("");
  const [menu, setMenu] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (click) => {
    setIsClicked({ ...initialState, [click]: true });
  };

  const sharedState = {
    activeSidebar,
    setActiveSidebar,
    isClicked,
    setIsClicked,
    handleClick,
    isDarkMode,
    setIsDarkMode,
    location,
    setLocation,
    menu,
    setMenu,
    currentPage,
    setCurrentPage,
  };

  return (
    <SharedStateContext.Provider value={sharedState}>
      {children}
    </SharedStateContext.Provider>
  );
};

export { SharedStateProvider, SharedStateContext };
