import styles from "./SinglePost.module.scss";
import { Card, Button } from "react-bootstrap";
import dateToStr from "../../../utils/dateToStr";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesRedux";
const SinglePost = (post) => {
  const categoryData = useSelector(getAllCategories());
  return (
    <Card style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text className={styles.p}>
          Author: <span className={styles.span}>{post.author}</span>
        </Card.Text>
        <Card.Text className={styles.p}>
          Published:{" "}
          <span className={styles.span}>{dateToStr(post.publishedDate)}</span>
        </Card.Text>
        <Card.Text className={styles.p}>
          Category:{" "}
          {categoryData.map((category) =>
            category.id === post.categoryId ? (
              <span key={category.id} className={styles.span}>
                {category.title}
              </span>
            ) : undefined
          )}
        </Card.Text>
        <Card.Text>{post.shortDescription}</Card.Text>
        <Link to={"/post/" + post.id}>
          <Button variant="primary">Read more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default SinglePost;
