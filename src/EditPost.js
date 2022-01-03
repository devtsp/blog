import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { useStoreState, useStoreActions } from "easy-peasy";

const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const editTitle = useStoreState((state) => state.editTitle);
  const editBody = useStoreState((state) => state.editBody);

  const editPost = useStoreActions((actions) => actions.editPost);
  const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  const setEditBody = useStoreActions((actions) => actions.setEditBody);

  const getPostById = useStoreState((state) => state.getPostById);
  const post = getPostById(id)

  useEffect(() => {
    if (post) {
      setEditTitle(post.title); // Seteamos el estado "editado" con el ya "escrito"
      setEditBody(post.body); // idem
    }
  }, [post, setEditTitle, setEditBody]);

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    editPost(updatedPost);
    navigate(`/post/${id}`)
  };

  return (
    // Cuerpo del html copiado de <NewPost> component
    <main className="newPost flexAux">
      {editTitle && (
        <>
          <h1>Edit Post:</h1>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            {" "}
            {/* En este caso en "onSubmit" prevenimos default para poder pasar el id en el boton a "handleEdit" */}
            <label htmlFor="postTitle">Title:</label>
            <input
              id="postTitle"
              type="text"
              required
              value={editTitle} // En vez de "postTitle"
              onChange={(e) => setEditTitle(e.target.value)} // En vez de set "PostTile"
            />
            <label htmlFor="postBody">Post:</label>
            <textarea
              id="postBody"
              required
              value={editBody} // En vez de "postBody"
              onChange={(e) => setEditBody(e.target.value)} // En vez de "setPostBody"
            />
            <button type="button" onClick={() => handleEdit(post.id)}>
              Submit
            </button>
          </form>
        </>
      )}
      {!editTitle && (
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

export default EditPost;
