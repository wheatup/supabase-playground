import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../Layout";
import Login from "./Login";

const MessageBoard = () => {
	const userProfile = useContext(UserContext);

	return (
		<div data-comp="MessageBoard">
			<Link to="/1">
				<h2>MESSAGE BOARD</h2>
			</Link>
			{userProfile.session ? (<></>) : (
				<h2 className="login">Please <Login /> first!</h2>
			)}
			<Outlet />
		</div>
	);
}

export default MessageBoard;