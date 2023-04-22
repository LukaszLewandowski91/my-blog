import PostForm from "../PostForm/PostForm";
const EditPostForm = () => {
  const handleSubmit = () => {
    console.log("Edit post");
  };
  return <PostForm action={handleSubmit} actionText={"Edit Post"} />;
};

export default EditPostForm;
