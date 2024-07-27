import { NavLink, Link } from "react-router-dom";
import "./header.css";
import SearchItem from "../search/search";

const Header = () => {
	return (
		<div className="container header-cover">
			<div className="header">
				<Link
					className="header-logo"
					to={"/"}>
					MyShop
				</Link>
				<nav className="header-nav">
					<NavLink
						className={"header-link"}
						to={"/"}>
						All
					</NavLink>
					<NavLink
						className={"header-link"}
						to={"/mensclothes"}>
						Mens' clothes
					</NavLink>
					<NavLink
						className={"header-link"}
						to={"/womensclothes"}>
						Women's clothes
					</NavLink>
					<NavLink
						className={"header-link"}
						to={"/jewelary"}>
						Jewelary
					</NavLink>
					<NavLink
						className={"header-link"}
						to={"/electronics"}>
						Electronics
					</NavLink>
				</nav>
				<SearchItem/>
				<button className="burgerBtn">
					<div className="burger-btn"></div>
					<div className="burger-btn"></div>
					<div className="burger-btn"></div>
				</button>
			</div>
		</div>
	);
};

export default Header;
