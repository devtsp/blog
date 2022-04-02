import { useParams, Link, useNavigate } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';

const PostPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const deletePost = useStoreActions(actions => actions.deletePost);
	const getPostById = useStoreState(state => state.getPostById);
	const post = getPostById(id);

	const handleDelete = async id => {
		deletePost(id);
		navigate('/');
	};

	return (
		<main className="PostPage flexAux">
			{post && (
				<article className="post">
					<h2>{post.title}</h2>
					<p className="postDate">{post.datetime}</p>
					<p className="postBody">{post.body}</p>
					<button
						className="deleteButton"
						onClick={() => handleDelete(post.id)}
					>
						Delete Post
					</button>
					<Link to={`/edit/${post.id}`}>
						<button className="editButton">Edit Post</button>
					</Link>
				</article>
			)}
			{!post && (
				<article className="postNotFound">
					<h2>Post Not Found</h2>
					<p>Well, that's disappointing!</p>
					<p>
						<Link className="toHome" to="/">
							Visit Our Homepage
						</Link>
					</p>
				</article>
			)}
		</main>
	);
};

export default PostPage;
