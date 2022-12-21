import React, { createContext, useEffect } from 'react';
import { Outlet } from 'react-router';
import NavBar from './components/NavBar';
import { useSession } from './hooks/session';

const Layout = () => {
	const userInfo = useSession();

	return (
		<UserContext.Provider value={userInfo}>
			<NavBar />
			<main className="content">
				<div className="content-wrapper">
					<Outlet />
				</div>
			</main>
		</UserContext.Provider>
	);
}

export const UserContext = createContext({
	session: null,
	profile: null
});

export default Layout;