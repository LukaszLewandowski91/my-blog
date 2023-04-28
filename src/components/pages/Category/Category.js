import { useParams } from "react-router-dom";
import styles from "./Category.module.scss";
import { getPostByCategoryId } from "../../../redux/postsRedux";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { getCategoryById } from "../../../redux/categoriesRedux";
const Category = () => {
  const { categoryId } = useParams();
  const postData = useSelector((state) =>
    getPostByCategoryId(state, categoryId)
  );

  const category = useSelector((state) => getCategoryById(state, categoryId));

  return (
    <Container>
      <h1 className={styles.title}>Category: {category}</h1>
    </Container>
  );
};

export default Category;
