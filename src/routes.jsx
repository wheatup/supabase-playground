import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import AllPosts from "./pages/AllPosts";
import PostView from "./pages/PostView";
import Welcome from "./pages/Welcome";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: ":pageNumber",
				element: <AllPosts />
			},
			{
				path: "post/:postId",
				element: <PostView />
			}
		]
	}, {
		path: "welcome",
		element: <Welcome />
	}
]);

export default routes;