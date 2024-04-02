import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import "./index.css";
interface Props {
  handleClose: () => void;
  open: boolean;
}
const ROUTES = [
  { label: "Work Experience", path: "/work" },
  { label: "Small Problems", path: "/small-problems" },
  { label: "About", path: "/about" },
];
const Navigation = (props: Props) => {
  return (
    <nav
      className={classNames({
        "nav-hidden": !props.open,
        "nav-visible": props.open,
      })}
    >
      <ul className={classNames("list-wrapper")}>
        {ROUTES.map((route) => {
          return (
            <li key={route.path}>
              <Link onClick={props.handleClose} href={route.path}>
                {route.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
