import React, { Component } from "react";

class FirstSecondAndThird extends Component {
  render() {
    const {
      titleWraper,
      price,
      wrapper,
      description,
      thirdTitle,
      description2,
      ipodCaption,
      priceGray,
      price2,
      ipodCaptionPrice,
      ipodCaptionDescription,
    } = this.props;
    return (
      <section className={wrapper}>
        <div className="container">
          {this.props.newAlert && <div className="new-alert">New</div>}

          {this.props.boldBlack && (
            <div className={"title-wraper bold black"}>{titleWraper}</div>
          )}

          {this.props.bold && (
            <div className={"title-wraper bold"}>{titleWraper}</div>
          )}

          {this.props.title && (
            <div className="description-wrapper black">{description}</div>
          )}

          {this.props.thirdTitle && (
            <div className="description-wrapper">{description2}</div>
          )}

          {this.props.priceGray && (
            <div className="price-wrapper grey">{price}</div>
          )}

          {this.props.price && <div className="price-wrapper">{price2}</div>}
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

          {ipodCaption && (
            <div className="ipod-caption row">
              <div className="col-sm-12 col-md-6 text-md-right">
                {ipodCaptionPrice}
              </div>
              <div className="col-sm-12 col-md-6 text-md-left">
                {ipodCaptionDescription}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default FirstSecondAndThird;
