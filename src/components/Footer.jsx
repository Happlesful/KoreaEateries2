import React from "react";
import { GitHub, Calendar } from "react-feather";

const Footer = () => {
  return (
    <div className="flex flex-col w-screen bg-neutral-300">
      <div className="p-5" id="content">
        <span className="flex flex-row justify-center items-center">
          <GitHub className="mr-1 scale-90" /> GitHub:
          <a href="https://github.com/Happlesful" className="mx-1">
            Happlesful
          </a>
        </span>
        <span className="flex flex-row justify-center items-center">
          <Calendar className="mr-1 scale-90" />
          Last updated: 11.19.23
        </span>
      </div>
    </div>
  );
};

export default Footer;
