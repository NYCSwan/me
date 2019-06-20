import React, { useState } from "react";
import ExpandedHeader from "./ExpandedHeader";
// import MenuHeader from "./MenuHeader";
import MaterialIcon from "material-icons-react";
import "./MenuHeader.scss";
import logo from "./swan_logo_white.png";
import "./Header.scss";

function Header() {
  const [hover, mouseOver] = useState(false);

  // <MenuHeader onMouseOver={() => mouseOver(!hover)} />
  return (
    <nav className={hover === true ? "App-header open" : "App-header close"}>
      <img
        className="logo"
        src={logo}
        alt="Megan Swanby- Kickass problem solver, kind soul, tenacious programmer"
      />
      <a
        className={"menu"}
        href="/home"
        onMouseOver={() => mouseOver(!hover)}
        onClick={() => mouseOver(!hover)}
      >
        <MaterialIcon
          icon="format_align_justify"
          size="large"
          color={"#ffffff"}
        />
      </a>
      <ExpandedHeader hover={hover} />
      <div className="communication-container">
        <MaterialIcon icon="link" size="small" color={"#ffffff"} />
        <MaterialIcon icon="face" size="small" color={"#ffffff"} />
      </div>
    </nav>
  );
}
export default Header;
