import styles from "./Post.module.scss";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { getPostById } from "../../../redux/postsRedux";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useState } from "react";
import { removePost } from "../../../redux/postsRedux";
import { Link } from "react-router-dom";
import dateToStr from "../../../utils/dateToStr";
import { getAllCategories } from "../../../redux/categoriesRedux";

const Post = () => {
  const { postId } = useParams();
  const postData = useSelector((state) => getPostById(state, postId));

  // const categoryData = useSelector((state) =>
  //   getCategoryById(state, postData.categoryId)
  // );

  const categoryData = useSelector(getAllCategories());

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (postId) => {
    dispatch(removePost(postId));
    handleClose();
    <Navigate to="/" />;
  };
  if (!postData) return <Navigate to="/" />;
  return (
    <Container>
      <Row className={styles.containerFlex}>
        <Col>
          <h1 className={styles.title}>{postData.title}</h1>
          <div className={styles.colData}>
            <p className={styles.p}>
              Author: <span className={styles.span}>{postData.author}</span>
            </p>
            <p className={styles.p}>
              Published:{" "}
              <span className={styles.span}>
                {dateToStr(postData.publishedDate)}
              </span>
            </p>
            <p className={styles.p}>
              Category:{" "}
              {categoryData.map((category) =>
                category.id === postData.categoryId ? (
                  <span key={category.id} className={styles.span}>
                    {category.title}
                  </span>
                ) : undefined
              )}
            </p>
            <div className={styles.content}>
              <p dangerouslySetInnerHTML={{ __html: postData.content }} />
            </div>
          </div>
        </Col>
        <Col>
          <Link to={"/post-edit/" + postData.id}>
            <Button variant="outline-info" className={styles.buttonAdd}>
              Edit
            </Button>
          </Link>
          <Button
            variant="outline-danger"
            className={styles.buttonAdd}
            onClick={handleShow}
          >
            Delete
          </Button>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This operation will completely remove this post from the app. Are you
          sure do you want to do that ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleSubmit(postData.id)}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
export default Post;
