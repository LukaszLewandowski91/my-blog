import { useParams } from "react-router-dom";
import styles from "./Category.module.scss";
import { getPostByCategoryId } from "../../../redux/postsRedux";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getCategoryById } from "../../../redux/categoriesRedux";
import SinglePost from "../../features/SinglePost/SinglePost";

const Category = () => {
  const { categoryId } = useParams();
  const postData = useSelector((state) =>
    getPostByCategoryId(state, categoryId)
  );

  const category = useSelector((state) => getCategoryById(state, categoryId));

  return (
    <Container>
      <h1 className={styles.title}>Category: {category}</h1>
      <Row>
        {postData.length > 0 ? (
          postData.map((post) => (
            <Col key={post.id} md={4} sm={12} className="my-1">
              <SinglePost {...post} />
            </Col>
          ))
        ) : (
          <span className={styles.span}>No posts in this category...</span>
        )}
      </Row>
    </Container>
  );
};

export default Category;
