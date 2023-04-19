import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import styles from "./Posts.module.scss";

const Posts = () => {
  const posts = useSelector(getAllPosts());
  return (
    <Container>
      <Row>
        {posts.map((post) => (
          <Col md={4} sm={12} className="my-1">
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  <p className={styles.p}>
                    Author: <span className={styles.span}>{post.author}</span>
                  </p>
                  <p className={styles.p}>
                    Published:{" "}
                    <span className={styles.span}>{post.publishedDate}</span>
                  </p>
                  <span>{post.shortDescription}</span>
                </Card.Text>
                <Button variant="primary" href={"/post/" + post.id}>
                  Read more
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Posts;
