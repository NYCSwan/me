import React from "react";
import MaterialIcon from "material-icons-react";
import "./MenuHeader.scss";

const MenuHeader = props => {
  return (
    <div className="menu" onMouseOver={e => props.onMouseOver()}>
      <a className="link" href="/home" onMouseOver={e => props.onMouseOver()}>
        <MaterialIcon
          icon="format_align_justify"
          size="large"
          color={"#ffffff"}
        />
      </a>
    </div>
  );
};

export default MenuHeader;
