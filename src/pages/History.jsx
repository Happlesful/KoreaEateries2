import React, { useEffect, useContext } from "react";
import { SharedStateContext, SharedStateProvider } from "../SharedStateContext";
import matjib from "../MatJibData.json";

const History = () => {
  return (
    <div
      className="flex justify-center my-4 -translate-x-36"
      id="display-history"
    >
      History
    </div>
  );
};

export default History;
