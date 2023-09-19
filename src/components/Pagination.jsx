import React, { useState, useEffec, useContext } from "react";
import { SharedStateContext, SharedStateProvider } from "../SharedStateContext";
import {
  ChevronRight,
  ChevronLeft,
  ChevronsRight,
  ChevronsLeft,
} from "react-feather";

const Pagination = (restaurant) => {
  //implement: after click, send the page to the top
  const itemsPerPage = 20;
  const { currentPage, setCurrentPage } = useContext(SharedStateContext);
  const totalPages =
    Math.floor(restaurant.restaurants.length / itemsPerPage) + 1;
  console.log(restaurant.restaurants.length);
  const iterator = [];
  const fiveIter = () => {
    iterator.length = 0;
    const lowerBound = () => {
      let bound = Math.max(1, currentPage - 2);
      if (currentPage > totalPages - 2 && totalPages > 5) {
        bound = totalPages - 4;
      } else {
        bound = Math.max(1, currentPage - 2);
      }
      return bound;
    };
    const upperBound = () => {
      let bound = Math.min(totalPages, currentPage + 2);
      if (currentPage < 3 && totalPages > 5) {
        bound = 5;
      }
      return bound;
    };
    for (let i = lowerBound(); i <= upperBound(); i++) {
      iterator.push(i);
    }
  };
  fiveIter();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center mt-8 mb-2">
        <ChevronsLeft
          className="opacity-60 hover:opacity-100 ease-in duration-100"
          onClick={() => {
            if (currentPage !== 1) setCurrentPage(1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
        <ChevronLeft
          className="opacity-60 hover:opacity-100 ease-in duration-100"
          onClick={() => {
            if (currentPage !== 1) setCurrentPage(currentPage - 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
        <div className="flex flex-row mx-2 items-center justify-center">
          {iterator.map((page, index) => {
            return (
              <button
                type="button"
                key={index}
                className={`rounded-lg h-8 w-8 mx-1 ease-in duration-200
                    ${
                      page === currentPage
                        ? "bg-purple-300 text-black"
                        : "bg-indigo-200 hover:bg-indigo-300 text-gray-600 hover:text-black"
                    }`}
                onClick={() => {
                  setCurrentPage(page);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {page}
              </button>
            );
          })}
        </div>
        <ChevronRight
          className="opacity-60 hover:opacity-100 ease-in duration-100"
          onClick={() => {
            if (currentPage !== totalPages) setCurrentPage(currentPage + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
        <ChevronsRight
          className="opacity-60 hover:opacity-100 ease-in duration-100"
          onClick={() => {
            if (currentPage !== totalPages) setCurrentPage(totalPages);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </div>
      <p className="text-xs">
        {currentPage} of {totalPages}
      </p>
    </div>
  );
};

export default Pagination;
