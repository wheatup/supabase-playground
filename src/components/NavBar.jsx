import { Link, NavLink } from "react-router-dom";

const NavBar = props => {
	return (
		<nav data-comp="NavBar">
			<div class="content">
				<Link className="logo" to="/">
					<img src="/images/home.jpg" alt="home" />
				</Link>

				<div className="navs">
					<NavLink to="/1"><i className="icon-pen"></i>message board</NavLink>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;