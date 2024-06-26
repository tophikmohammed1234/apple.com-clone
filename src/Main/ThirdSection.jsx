import React, { Component } from "react";
import FirstSecondAndThird from "./FirstSecondAndThird";

class ThirdSection extends Component {
  render() {
    return (
      <FirstSecondAndThird
        wrapper="third-hightlight-wrapper"
        bold
        titleWraper="iPhone 11 Pro"
        thirdTitle
        description2="Pro cameras. Pro display. Pro performance."
        price
        price2="From $24.95/mo. or $599 with trade‑in."
      />
    );
  }
}

export default ThirdSection;
