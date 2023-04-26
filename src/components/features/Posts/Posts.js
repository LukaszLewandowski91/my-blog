import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Posts.module.scss";
import dateToStr from "../../../utils/dateToStr";
const Posts = () => {
  const posts = useSelector(getAllPosts());
  return (
    <Container>
      <Row>
        {posts.map((post) => (
          <Col key={post.id} md={4} sm={12} className="my-1">
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text className={styles.p}>
                  Author: <span className={styles.span}>{post.author}</span>
                </Card.Text>
                <Card.Text className={styles.p}>
                  Published:{" "}
                  {/* <span className={styles.span}>{post.publishedDate}</span> */}
                  <span className={styles.span}>
                    {dateToStr(post.publishedDate)}
                  </span>
                </Card.Text>
                <Card.Text>{post.shortDescription}</Card.Text>
                <Link to={"/post/" + post.id}>
                  <Button variant="primary">Read more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Posts;
