import Post from './Post';

const Feed = ({ posts }) => {
	return (
		<div className="Feed">
			<h1>Posts:</h1>
			{posts.map(post => (
				<Post key={post.id} post={post} />
			))}
		</div>
	);
};

export default Feed;
