import styles from "./Post.module.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import { getPostById } from "../../../redux/postsRedux";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const Post = () => {
  const { postId } = useParams();
  const postData = useSelector((state) => getPostById(state, postId));

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
              <span className={styles.span}>{postData.publishedDate}</span>
            </p>

            <div className={styles.content}>
              <span className={styles.span}>{postData.content}</span>
            </div>
          </div>
        </Col>
        <Col>
          <Button
            variant="outline-info"
            href={"/post-edit/" + postData.id}
            className={styles.buttonAdd}
          >
            Edit
          </Button>
          <Button variant="outline-danger" className={styles.buttonAdd}>
            Delete
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default Post;
