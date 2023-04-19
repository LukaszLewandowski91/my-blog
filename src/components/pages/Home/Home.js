import { Container, Button } from "react-bootstrap";
import Posts from "../../features/Posts/Posts";
import styles from "./Home.module.scss";
const Home = () => {
  return (
    <Container>
      <div className={styles.containerFlex}>
        <h1 className={styles.title}>All Posts</h1>
        <Button
          variant="outline-info"
          href="/post-add"
          className={styles.buttonAdd}
        >
          Add post
        </Button>
      </div>
      <Posts />
    </Container>
  );
};
export default Home;
