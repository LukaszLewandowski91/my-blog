import { Form, FloatingLabel, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import styles from "./PostForm.module.scss";
import ReactQuill from "react-quill";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import pl from "date-fns/locale/pl";

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || "");
  const [author, setAuthor] = useState(props.author || "");
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || "");
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ""
  );
  registerLocale("pl", pl);
  const [content, setContent] = useState(props.content || "");
  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
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
          <DatePicker
            selected={publishedDate}
            onChange={(date) => setPublishedDate(date)}
            locale="pl"
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
          <Form.Label>Main content</Form.Label>
          <ReactQuill theme="snow" value={content} onChange={setContent} />
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
  );
};

export default PostForm;
