import React, { Component } from "react";

class ForForth extends Component {
  render() {
    const { sideWrapper, container, titleWraper } = this.props;
    return (
      <div className={sideWrapper}>
        <div className={container}>
          <div className="title-wraper">{titleWraper}</div>
          {this.props.white && (
            <div className="title-wraper white">
              Get the latest CDC response to COVID-19.
            </div>
          )}
          {this.props.descriptionWraper && (
            <div className="description-wraper">
              Just the right amount of everything.
            </div>
          )}
          {this.props.price && (
            <div className="price-wrapper">
              From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
            </div>
          )}

          {this.props.linksWrapperWhite && (
            <div className="links-wrapper white">
              <ul>
                <li>
                  <a href="www.evangadi.com">Watch the PSA</a>
                </li>
              </ul>
            </div>
          )}

          {this.props.linksWrapper && (
            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="www.evangadi.com">Learn more</a>
                </li>
                <li>
                  <a href="www.evangadi.com">Apply now</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ForForth;
