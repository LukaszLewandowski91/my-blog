import { useDispatch } from "react-redux";
import PostForm from "../PostForm/PostForm";
import { Navigate, useNavigate } from "react-router-dom";
import { editPost } from "../../../redux/postsRedux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";
const EditPostForm = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postData = useSelector((state) => getPostById(state, postId));

  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, postId }));
    navigate("/");
  };
  if (!postData) return <Navigate to="/" />;
  return (
    <PostForm action={handleSubmit} actionText={"Edit Post"} {...postData} />
  );
};

export default EditPostForm;
