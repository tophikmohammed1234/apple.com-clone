import React, { Component } from "react";
import "../CommonResource/css/bootstrap.css";
import "../CommonResource/css/styles.css";
import ColomnFooter from "./ColomnFooter";
import footerDataSection from "./FooterData";

class FooterLinksWrapper extends Component {
  render() {
    return (
      <div className="footer-links-wrapper row">
        {footerDataSection.map((section, i) => {
          return (
            <div className={`links-wrapper-${i + 1} col-sm-12 col-md`} key={i}>
              <ColomnFooter data={section} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default FooterLinksWrapper;
