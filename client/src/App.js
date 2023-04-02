import { PostList } from "./components/PostLists";
import { Routes, Route } from "react-router";
import { Post } from "./components/Post";
import { PostProvider } from "./context/PostContext";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route
          path="/posts/:id"
          element={
            <PostProvider>
              <Post />{" "}
            </PostProvider>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
