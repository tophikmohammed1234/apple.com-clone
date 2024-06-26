import React, { Component } from "react";

class ColomnFooter extends Component {
  render() {
    // console.log(this.props.data);
    return (
      <>
        {this.props.data.map(({ title, links }, i) => (
          <div key={i}>
            <h3>{title}</h3>
            <ul>
              {links.map(({ link, url }, i) => {
                return (
                  <li key={i}>
                    <a href={url}>{link}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </>
    );
  }
}

export default ColomnFooter;
