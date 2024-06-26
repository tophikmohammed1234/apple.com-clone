import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavLink extends Component {
	render() {
		const { url, LinkName, search, cart } = this.props.section;
		return (
			<li className="nav-item">
				<Link className="nav-link js-scroll-trigger" to={url}>
					{LinkName} <img src={search} alt="" /> <img src={cart} alt="" />
				</Link>
			</li>
		);
	}
}

export default NavLink;
