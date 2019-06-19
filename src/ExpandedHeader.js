import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import "./ExpandedHeader.scss";

const ExpandedHeader = props => {
  return (
    <ul
      className={
        props.hover === true ? "Header-list open" : "Header-list close"
      }
    >
      <li
        className={
          props.hover === true ? "Header-link slide-up" : "Header-link close"
        }
      >
        <Link to="/">Home</Link>
      </li>
      <li
        className={
          props.hover === true ? "Header-link slide-up" : "Header-link close"
        }
      >
        <Link to="/about">About</Link>
      </li>
      <li
        className={
          props.hover === true ? "Header-link slide-up" : "Header-link close"
        }
      >
        <Link to="/portfolio">Portfolio</Link>
      </li>
    </ul>
  );
};

export default ExpandedHeader;
