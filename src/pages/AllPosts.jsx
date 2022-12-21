import { useParams } from "react-router-dom";

const AllPosts = () => {
	const { pageNumber } = useParams();
	return (
		<div data-page="PostView">All Posts, page {pageNumber}</div>
	);
}

export default AllPosts;