import logo from "../CommonResource/images/icons/apple-tv-logo.png";
import banker from "../CommonResource/images/home/banker.png";
import watchSeries5 from "../CommonResource/images/icons/watch-series5-logo.png";

import React, { Component } from "react";

export default class FifthSection extends Component {
  render() {
    return (
      <section className="fifth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={logo} alt="" />
                  </div>
                </div>

                <div className="tvshow-logo-wraper">
                  <img src={banker} alt="" />
                </div>

                <div className="watch-more-wrapper">
                  <a href="www.evangadi.com">Watch now on the Apple TV App</a>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={watchSeries5} alt="" />
                  </div>
                </div>
                <div className="description-wraper">
                  With the Always-On Retina display.
                  <br />
                  You’ve never seen a watch like this.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="www.evangadi.com">Learn more</a>
                    </li>
                    <li>
                      <a href="www.evangadi.com">Buy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
