import { useDispatch } from "react-redux";
import styles from "./AddPostForm.module.scss";
import { Form, Col, Row, Button, FloatingLabel } from "react-bootstrap";
import { useState } from "react";
import { addPost } from "../../../redux/postsRedux";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({ title, author, publishedDate, shortDescription, content })
    );
    navigate("/");
    setTitle("");
    setAuthor("");
    setPublishedDate("");
    setShortDescription("");
    setContent("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            className="mb-3"
            placeholder="Enter Title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Label>Author</Form.Label>
          <Form.Control
            value={author}
            className="mb-3"
            placeholder="Enter Author"
            required
            onChange={(e) => setAuthor(e.target.value)}
          />
          <Form.Label>Published</Form.Label>
          <Form.Control
            value={publishedDate}
            className="mb-3"
            placeholder="Enter date DD-MM-YYYY"
            required
            onChange={(e) => setPublishedDate(e.target.value)}
          />
          <Form.Label>Short description</Form.Label>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Leave a comment here"
            className="mb-3"
          >
            <Form.Control
              value={shortDescription}
              as="textarea"
              className={styles.shortDescription}
              placeholder="Leave a comment here"
              required
              style={{ height: "120px" }}
              onChange={(e) => setShortDescription(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Leave a comment here"
            className="mb-3"
          >
            <Form.Control
              value={content}
              as="textarea"
              className={styles.mainContent}
              placeholder="Leave a comment here"
              required
              style={{ height: "320px" }}
              onChange={(e) => setContent(e.target.value)}
            />
          </FloatingLabel>
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        Add Post
      </Button>
    </Form>
  );
};

export default AddPostForm;
