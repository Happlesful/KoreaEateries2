import React, { useEffect, useContext } from "react";
import { SharedStateContext, SharedStateProvider } from "../SharedStateContext";
import matjib from "../MatJibData.json";

const Favourites = () => {
  return (
    <>
      <span
        className="flex justify-center my-4 -translate-x-36"
        id="display-restaurant"
      >
        My Favourites!
      </span>
    </>
  );
};

export default Favourites;
