import { Form, FloatingLabel, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import styles from "./PostForm.module.scss";
import ReactQuill from "react-quill";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import pl from "date-fns/locale/pl";
import { useForm } from "react-hook-form";

const PostForm = ({ action, actionText, ...props }) => {
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  registerLocale("pl", pl);

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const [title, setTitle] = useState(props.title || "");
  const [author, setAuthor] = useState(props.author || "");
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || "");
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ""
  );

  const [content, setContent] = useState(props.content || "");

  const handleSubmit = () => {
    setContentError(!content);
    setDateError(!publishedDate);
    if (content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content });
    }
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Title</Form.Label>
          <Form.Control
            {...register("title", { required: true, minLength: 3 })}
            value={title}
            className="mb-3"
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
          {errors.title && (
            <small className="d-block form-text text-danger mt-2">
              Title is too short (min is 3)
            </small>
          )}
          <Form.Label>Author</Form.Label>
          <Form.Control
            {...register("author", { required: true, minLength: 3 })}
            value={author}
            className="mb-3"
            placeholder="Enter Author"
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
          />
          {errors.author && (
            <small className="d-block form-text text-danger mt-2">
              Author is too short (min is 3)
            </small>
          )}
          <Form.Label>Published</Form.Label>
          <DatePicker
            selected={publishedDate}
            onChange={(date) => setPublishedDate(date)}
            locale="pl"
            className="mb-3"
          />
          {dateError && (
            <small className="d-block form-text text-danger mt-2">
              This field is required
            </small>
          )}
          <Form.Label>Short description</Form.Label>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Leave a comment here"
            className="mb-3"
          >
            <Form.Control
              {...register("shortDescription", {
                required: true,
                minLength: 20,
              })}
              value={shortDescription}
              as="textarea"
              className={styles.shortDescription}
              placeholder="Leave a comment here"
              style={{ height: "120px" }}
              onChange={(e) => setShortDescription(e.target.value)}
            />
            {errors.shortDescription && (
              <small className="d-block form-text text-danger mt-2">
                Short description is too short (min is 20)
              </small>
            )}
          </FloatingLabel>
          <Form.Label>Main content</Form.Label>
          <ReactQuill theme="snow" value={content} onChange={setContent} />
          {contentError && (
            <small className="d-block form-text text-danger mt-2">
              This field is required
            </small>
          )}
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
  );
};

export default PostForm;
