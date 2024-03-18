"use client";
import React, { useState } from "react";
import classNames from "classnames";
import "./header.css";
import Navigation from "../navigation/navigation";
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavClick = () => {
    setIsNavOpen((prev) => !prev);
  };
  return (
    <header>
      <div className="header">
        <div></div>
        <div className="logo">
          <h1>Shubhanshu</h1>
        </div>
        <div
          className={classNames("nav-lines", {
            "nav-lines-nav-open": isNavOpen,
          })}
          onClick={handleNavClick}
        >
          <div
            className={classNames("line1", { "line1-nav-open": isNavOpen })}
          ></div>
          <div
            className={classNames("line2", { "line2-nav-open": isNavOpen })}
          ></div>
          <div
            className={classNames("line3", { "line3-nav-open": isNavOpen })}
          ></div>
        </div>
      </div>
      <Navigation open={isNavOpen} />
    </header>
  );
};

export default Header;
