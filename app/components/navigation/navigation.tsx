import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import "./navigation.css";
interface Props {
  open: boolean;
}
const Navigation = (props: Props) => {
  return (
    <nav
      className={classNames("nav", {
        "nav-hidden": !props.open,
        "nav-visible": props.open,
      })}
    >
      <ul className={classNames("list-wrapper")}>
        <li>
          <Link href="/work">Work Experience</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
