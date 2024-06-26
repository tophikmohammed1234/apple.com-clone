import React, { Component } from "react";
import NavLink from "./NavLink";
import Data from "./NavData";

class NavMap extends Component {
  render() {
    // console.log(Data);
    return Data.map((val, i) => {
      return <NavLink key={i} section={val} />;
    });
  }
}

export default NavMap;
