import React from "react";
import { Link } from "react-router-dom";
import "./ExpandedHeader.scss";

const ExpandedHeader = props => {
  return (
    <div className={props.hover === true ? "m-menu open" : "m-menu"}>
      <div className="inner">
        <ul
          className={props.hover === true ? "Header-list open" : "Header-list"}
        >
          <li
            className={
              props.hover === true
                ? "Header-link slide-up"
                : "Header-link close"
            }
          >
            <Link className="text" to="/">
              Home
            </Link>
          </li>
          <li
            className={
              props.hover === true
                ? "Header-link slide-up"
                : "Header-link close"
            }
          >
            <Link className="text" to="/about">
              About
            </Link>
          </li>
          <li
            className={
              props.hover === true
                ? "Header-link slide-up"
                : "Header-link close"
            }
          >
            <Link className="text" to="/portfolio">
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExpandedHeader;
