import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesRedux";
import { Row, Card, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Categories.module.scss";
const Categories = () => {
  const categories = useSelector(getAllCategories());

  return (
    <Container>
      {categories.map((category) => (
        <Row key={category.id}>
          <Col md={12} sm={12} className="my-1">
            <Card style={{ width: "100%" }}>
              <Card.Text className={styles.linkCategory}>
                <Link to={"/category/" + category.id}>{category.title}</Link>
              </Card.Text>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Categories;
