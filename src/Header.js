import React from "react";
import ExpandedHeader from "./ExpandedHeader";
import MenuHeader from "./MenuHeader";
import "./Header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.mouseOver = this.mouseOver.bind(this);
  }

  mouseOver = () => {
    console.log("mouse over");
    const { hover } = this.state;
    this.setState({ hover: !hover });
  };

  render() {
    const { hover } = this.state;

    return (
      <div className={hover === true ? "App-header close" : "App-header open"}>
        <MenuHeader onMouseOver={this.mouseOver} />
        <ExpandedHeader hover={hover} />
      </div>
    );
  }
}
export default Header;
