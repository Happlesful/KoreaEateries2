import React, { createContext, useState } from "react";

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
  };

  return (
    <SharedStateContext.Provider value={sharedState}>
      {children}
    </SharedStateContext.Provider>
  );
};

export { SharedStateProvider, SharedStateContext };
