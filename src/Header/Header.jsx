import logo from "../CommonResource/images/icons/logo-sm.png";
import { Link } from "react-router-dom";
import NavMap from "./NavMap";

function Header() {
	return (
		<div className="nav-wrapper fixed-top">
			<div className="container">
				<nav className="navbar navbar-toggleable-sm navbar-expand-md">
					<button
						className="navbar-toggler navbar-toggler-right"
						type="button"
						data-toggle="collapse"
						data-target=".navbar-collapse"
					>
						☰
					</button>
					<Link className="navbar-brand mx-auto" to="/">
						<img src={logo} alt="" />
					</Link>
					<div className="navbar-collapse collapse">
						<ul className="navbar-nav nav-justified w-100 nav-fill">
							<NavMap />
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Header;
