"use client";
import React, { useState } from "react";
import classNames from "classnames";
import "./index.css";
import Navigation from "../navigation";
import Image from "next/image";
import logoImage from "./shubh.png";
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
          <Image
            src={logoImage.src}
            alt="shubh logo"
            width="100"
            height="100"
          ></Image>
        </div>
        <div className="hamburger-wrapper">
          <div
            className={classNames("hamburger-lines", {
              "hamburger-lines-nav-open": isNavOpen,
            })}
            onClick={handleNavClick}
            data-testid="hamburger"
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
      </div>
      <Navigation open={isNavOpen} />
    </header>
  );
};

export default Header;
