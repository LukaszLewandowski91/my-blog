import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import { Col, Container, Row } from "react-bootstrap";
import SinglePost from "../SinglePost/SinglePost";

const Posts = () => {
  const posts = useSelector(getAllPosts());

  return (
    <Container>
      <Row>
        {posts.map((post) => (
          <Col key={post.id} md={4} sm={12} className="my-1">
            <SinglePost {...post} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Posts;
