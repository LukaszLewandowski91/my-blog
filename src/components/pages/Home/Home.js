import { Container, Button } from "react-bootstrap";
import Posts from "../../features/Posts/Posts";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Container>
      <div className={styles.containerFlex}>
        <h1 className={styles.title}>All Posts</h1>
        <Link to="/post-add">
          <Button variant="outline-info" className={styles.buttonAdd}>
            Add post
          </Button>
        </Link>
      </div>
      <Posts />
    </Container>
  );
};
export default Home;
