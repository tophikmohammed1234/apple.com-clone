import React, { Component } from "react";
import FirstSecondAndThird from "./FirstSecondAndThird";

class FirstSection extends Component {
  render() {
    return (
      <FirstSecondAndThird
        wrapper="first-hightlight-wrapper"
        boldBlack
        titleWraper="iPad Pro"
        newAlert
        ipodCaption
        ipodCaptionPrice="iPad Pro available starting 3.25"
        ipodCaptionDescription="Magic Keyboard coming in May"
      />
    );
  }
}

export default FirstSection;
