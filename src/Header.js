import React, { useState } from "react";
import ExpandedHeader from "./ExpandedHeader";
import SvgIcon from "@material-ui/core/SvgIcon";
import logo from "./static/swan_logo_white.png";
import "./Header.scss";

function Header() {
  const [hover, mouseOver] = useState(false);

  return (
    <nav
      className={hover === true ? "App-header open" : "App-header close"}
      onMouseLeave={() => mouseOver(false)}
    >
      <img
        className="logo"
        src={logo}
        alt="Megan Swanby- Kickass problem solver, kind soul, tenacious programmer"
      />
      <div className="menu" onClick={() => mouseOver(!hover)}>
        <SvgIcon onMouseEnter={() => mouseOver(true)} fontSize="large">
          <path
            fill="#ffffff"
            d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
          />
        </SvgIcon>
      </div>
      <ExpandedHeader hover={hover} />
      <div className="communication-container">
        <SvgIcon fontSize="small">
          <path
            fill="#ffffff"
            d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"
          />
        </SvgIcon>
        <SvgIcon fontSize="small">
          <path
            fill="#ffffff"
            d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"
          />
        </SvgIcon>
      </div>
    </nav>
  );
}
export default Header;
