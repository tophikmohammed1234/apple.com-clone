import React, { Component } from "react";
import ForForth from "./ForForth";

export default class FourthSection extends Component {
  render() {
    return (
      <section className="fourth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <ForForth
              sideWrapper="left-side-wrapper col-sm-12 col-md-6"
              container="left-side-container"
              titleWraper="iPhone 11"
              descriptionWraper
              price
              linksWrapper
            />

            <ForForth
              sideWrapper="right-side-wrapper col-sm-12 col-md-6"
              container="right-side-container"
              white
              linksWrapperWhite
            />
          </div>
        </div>
      </section>
    );
  }
}
