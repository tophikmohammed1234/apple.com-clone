import React, { Component } from "react";
import FirstSecondAndThird from "./FirstSecondAndThird";

class SecondSection extends Component {
  render() {
    return (
      <FirstSecondAndThird
        wrapper="second-hightlight-wrapper"
        boldBlack
        titleWraper="MacBook Air"
        newAlert
        title
        description="Twice the speed. Twice the storage."
        priceGray
        price="Fr
        om $999."
      />
    );
  }
}

export default SecondSection;
