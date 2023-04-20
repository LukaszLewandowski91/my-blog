import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Post from "./components/pages/Post/Post";
import AddPost from "./components/pages/AddPost/AddPost";
import EditPost from "./components/pages/EditPost/EditPost";
import About from "./components/pages/About/About";
import NoMatch from "./components/pages/NoMatch/NoMatch";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/post-add" element={<AddPost />} />
        <Route path="/post-edit/:postId" element={<EditPost />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
