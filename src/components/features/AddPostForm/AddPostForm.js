import styles from "./AddPostForm.module.scss";
import { Form, Col, Row, Button, FloatingLabel } from "react-bootstrap";
const AddPostForm = () => {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Title</Form.Label>
          <Form.Control className="mb-3" placeholder="Enter Title" />
          <Form.Label>Author</Form.Label>
          <Form.Control className="mb-3" placeholder="Enter Author" />
          <Form.Label>Published</Form.Label>
          <Form.Control className="mb-3" placeholder="Enter date DD-MM-YYYY" />
          <Form.Label>Short description</Form.Label>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Leave a comment here"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              className={styles.shortDescription}
              placeholder="Leave a comment here"
              style={{ height: "120px" }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Leave a comment here"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              className={styles.mainContent}
              placeholder="Leave a comment here"
              style={{ height: "320px" }}
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
