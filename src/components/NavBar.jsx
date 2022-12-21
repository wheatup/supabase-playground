import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../Layout";
import Login from "./Login";

const NavBar = () => {
	const { session } = useContext(UserContext);
	return (
		<nav data-comp="NavBar">
			<div className="content">
				<Link className="logo" to="/">
					<img src="/images/home.jpg" alt="home" />
				</Link>

				<div className="navs">
					<NavLink to="/1"><i className="icon-pen"></i>message board</NavLink>
					<div>
						{session?.user ? 'logged in' : <Login />}
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;