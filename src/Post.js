import { Link } from 'react-router-dom';

const Post = ({ post }) => {
	return (
		<article className="post-preview">
			<Link to={`post/${post._id}`}>
				<h2>{post.title}</h2>
				<p className="postDate">{post.createdAt}</p>
			</Link>
			<p className="postBodyPre">
				{post.body.length <= 140 ? post.body : `${post.body.slice(0, 140)}...`}
			</p>
		</article>
	);
};

export default Post;
