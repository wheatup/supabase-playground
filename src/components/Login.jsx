import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useState, useCallback } from "react";
import supaClient from "../tools/supa-client";
import Dialog from "./Dialog";


const Login = () => {
	const [type, setType] = useState('');
	const [open, setOpen] = useState(false);

	const showDialog = useCallback(type => {
		setType(type);
		setOpen(true);
	}, []);


	return (
		<>
			<div data-comp="Login">
				<button onClick={() => showDialog('sign_in')} className="btn">Login</button>
				<span> or </span>
				<button onClick={() => showDialog('sign_up')} className="btn">Sign Up</button>
			</div>
			<Dialog allowClose onChange={setOpen} open={open}>
				<Auth supabaseClient={supaClient} view={type} appearance={{
					theme: ThemeSupa,
					className: {
						container: "auth-container",
						label: "auth-label",
						input: "auth-input",
						button: "auth-button"
					}
				}} />
			</Dialog>
		</>
	);
}

export default Login;