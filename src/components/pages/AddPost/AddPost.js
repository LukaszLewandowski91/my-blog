import { Container } from "react-bootstrap";
import AddPostForm from "../../features/AddPostForm/AddPostForm";

const AddPost = () => {
  return (
    <Container>
      <h1>Add Post</h1>
      <AddPostForm />
    </Container>
  );
};

export default AddPost;
